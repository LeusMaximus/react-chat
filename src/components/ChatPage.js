// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Own modules
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import MessageField from './MessageField';
import ChatSection from './ChatSection';
import { chats, messages } from '../mock-data';

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
});

const ChatPage = ({ classes }) => (
  <div className={classes.appFrame}>
    <CssBaseline />

    <div className={classes.mainArea}>
      <ChatHeader chatName="Some Chat Name" />

      <ChatSection messages={messages} />

      <MessageField />
    </div>

    <Sidebar chats={chats} />
  </div>
);

export default withStyles(styles)(ChatPage);
