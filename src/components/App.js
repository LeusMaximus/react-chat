// React
import React, { Component } from 'react';

// MUI components
import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

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

class App extends Component {
  render() {
    const { classes, chatName } = this.props;

    return (
      <div className={classes.appFrame}>
        <CssBaseline />

        <div className={classes.mainArea}>
          <ChatHeader chatName={chatName} />

          <ChatSection messages={messages} />

          <MessageField />
        </div>

        <Sidebar chats={chats} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
