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
import isEmpty from 'lodash.isempty';

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
  componentDidMount() {
    const { getAllChats, getMyChats } = this.props;

    Promise.all([
      getAllChats(),
      getMyChats(),
    ]);
  }

  render() {
    const {
      classes, allChats, myChats, activeChat, activeId,
      setActiveChat, isChatMember, joinChat
    } = this.props;

    return (
      <div className={classes.appFrame}>
        <div className={classes.mainArea}>
          <ChatHeader activeChat={activeChat} />

          <main className={classes.content}>
            {
              !isEmpty(activeChat)
                ? <MessagesSection chat={activeChat} isChatMember={isChatMember} joinChat={joinChat} />
                : <Paper className={classes.introMessage} elevation={4} rounded={20}>
                    <Typography variant="display1" component="h2" align="center">
                      Please select some chat to start messaging...
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
