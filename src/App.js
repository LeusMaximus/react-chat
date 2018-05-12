import React, { Component } from 'react';



import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';


import { FormControl } from 'material-ui/Form';
import Input from 'material-ui/Input';

import Paper from 'material-ui/Paper';


import { chats, messages } from './mock-data';
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import MessagesList from './components/MessagesList';

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

  chatArea: {
    flexShrink: 1,
    flexGrow: 1,
    overflowY: 'auto',
  },

  messageField: {
    flexShrink: 1,
    marginBottom: 15,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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

          <main className={classes.chatArea}>
            <MessagesList messages={messages} />
          </main>

          <Paper elevation={10} className={classes.messageField}>
            <FormControl fullWidth>
                <Input placeholder="Type your message..." />
              </FormControl>
          </Paper>
        </div>

        <Sidebar chats={chats} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
