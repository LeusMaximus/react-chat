// React
import React from 'react';

// MUI components
import { withStyles } from 'material-ui/styles';

// Own modules
import MessagesList from './MessagesList';

const styles = theme => ({
  chatArea: {
    flexShrink: 1,
    flexGrow: 1,
    overflowY: 'auto',
  },
});

const ChatSection = ({ classes, messages }) => (
  <main className={classes.chatArea}>
    <MessagesList messages={messages} />
  </main>
);

export default withStyles(styles)(ChatSection);
