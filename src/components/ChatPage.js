// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Vendor modules
import isEmpty from 'lodash/isEmpty';

// Own modules
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import MessagesSection from './MessagesSection';
import PopupMessage from './PopupMessage';
import { IClasses, IChatItem, IMessage } from '../interfaces/propTypes';

const styles = theme => ({
  appFrame: {
    display: 'flex',
    flexDirection: 'row-reverse',
    height: '100vh',
  },

  mainArea: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
  },

  introMessage: theme.mixins.gutters({
    maxWidth: 'calc(100% - 40px)',
    margin: 'auto',
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

class ChatPage extends React.Component {
  static defaultProps = {
    activeChat: null,
    activeId: '',
    userId: null,
    error: null,
  };

  static propTypes = {
    classes: IClasses.isRequired,
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    getAllChats: PropTypes.func.isRequired,
    getMyChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketsConnect: PropTypes.func.isRequired,
    mountChat: PropTypes.func.isRequired,
    unmountChat: PropTypes.func.isRequired,
    activeId: PropTypes.string,
    allChats: PropTypes.arrayOf(IChatItem).isRequired,
    myChats: PropTypes.arrayOf(IChatItem).isRequired,
    activeChat: IChatItem,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
    userId: PropTypes.string,
    messages: PropTypes.arrayOf(IMessage).isRequired,
    error: PropTypes.instanceOf(Error),
    isConnected: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const {
      getAllChats, getMyChats, setActiveChat, match, socketsConnect, mountChat,
    } = this.props;

    Promise.all([getAllChats(), getMyChats()])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;

        if (chatId) {
          setActiveChat(chatId, true);
          mountChat(chatId);
        }
      });
  }

  componentDidUpdate(prevProps) {
    const {
      setActiveChat, activeId, mountChat, unmountChat,
    } = this.props;
    const { chatId: prevChatId } = prevProps.match.params;
    const { chatId: currChatId } = this.props.match.params;

    if (activeId && prevChatId && !currChatId) {
      setActiveChat('', true);
      unmountChat(prevChatId);
      mountChat(currChatId);
    }

    if (currChatId && currChatId !== prevChatId) {
      setActiveChat(currChatId, false);
      if (prevChatId) {
        unmountChat(prevChatId);
      }

      mountChat(currChatId);
    }
  }

  render() {
    const {
      classes,
      allChats,
      myChats,
      activeChat,
      activeId,
      setActiveChat,
      joinChat,
      leaveChat,
      deleteChat,
      sendMessage,
      isMember,
      isCreator,
      isChatMember,
      userId,
      messages,
      error,
      isConnected,
    } = this.props;

    return (
      <div className={classes.appFrame}>
        <div className={classes.mainArea}>
          <ChatHeader
            isConnected={isConnected}
            activeChat={activeChat}
            isMember={isMember}
            isCreator={isCreator}
            isChatMember={isChatMember}
            leaveChat={leaveChat}
            deleteChat={deleteChat}
            activeId={activeId}
          />

          <main className={classes.content}>
            {!isEmpty(activeChat) ? (
              <MessagesSection
                isConnected={isConnected}
                messages={messages}
                chat={activeChat}
                isChatMember={isChatMember}
                joinChat={joinChat}
                sendMessage={sendMessage}
                userId={userId}
              />
            ) : (
              <Paper className={classes.introMessage} elevation={4} rounded={20}>
                <Typography variant="headline" component="h2" align="center">
                  Please select some chat (or create new) to start messaging...
                </Typography>
              </Paper>
            )}
          </main>
        </div>

        <Sidebar
          isConnected={isConnected}
          allChats={allChats}
          myChats={myChats}
          setActiveChat={setActiveChat}
          activeId={activeId}
        />

        {error && <PopupMessage variant="error" message={error.message} />}
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
