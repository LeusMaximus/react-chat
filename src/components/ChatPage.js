// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Own modules
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import MessagesSection from './MessagesSection';

// Vendor modules
import isEmpty from 'lodash/isEmpty';

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
    overflow: 'hidden'
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    flexGrow: 1,
  },

  introMessage: theme.mixins.gutters({
    maxWidth: 'calc(100% - 40px)',
    margin: 'auto',
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

class ChatPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeId: props.activeId,
    };
  }

  componentDidUpdate(prevProps, state) {
    const { setActiveChat, activeId } = this.props;
    const { chatId: prevChatId } = prevProps.match.params;
    const { chatId: currChatId } = this.props.match.params;

    if (activeId && prevChatId && !currChatId) {
      setActiveChat('', true);
    }

    if (currChatId && currChatId !== prevChatId && activeId === prevChatId) {
      setActiveChat(currChatId);
    }
  }

  componentDidMount() {
    const { getAllChats, getMyChats, setActiveChat, match } = this.props;

    Promise.all([
      getAllChats(),
      getMyChats(),
    ])
      .then(()=>{
        const { chatId } = match.params;

        if (chatId && chatId !== this.state.activeId) {
          setActiveChat(chatId, true);
        }
      })
  }

  render() {
    const {
      classes, allChats, myChats, activeChat, activeId,
      setActiveChat, joinChat, leaveChat, deleteChat, sendMessage,
      isMember, isCreator, isChatMember, userId
    } = this.props;

    return (
      <div className={classes.appFrame}>
        <div className={classes.mainArea}>
          <ChatHeader
            activeChat={activeChat}
            isMember={isMember}
            isCreator={isCreator}
            isChatMember={isChatMember}
            leaveChat={leaveChat}
            deleteChat={deleteChat}
            activeId={activeId}
          />

          <main className={classes.content}>
            {
              !isEmpty(activeChat)
                ? <MessagesSection
                    chat={activeChat}
                    isChatMember={isChatMember}
                    joinChat={joinChat}
                    sendMessage={sendMessage}
                    userId={userId}
                  />
                : <Paper className={classes.introMessage} elevation={4} rounded={20}>
                    <Typography variant="headline" component="h2" align="center">
                      Please select some chat (or create new) to start messaging...
                    </Typography>
                  </Paper>
            }
          </main>
        </div>

        <Sidebar allChats={allChats} myChats={myChats} setActiveChat={setActiveChat} activeId={activeId} />
      </div>
    );
  }
};

export default withStyles(styles)(ChatPage);
