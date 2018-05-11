import React, { Component } from 'react';

import nanoid from 'nanoid';

import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { FormControl } from 'material-ui/Form';
import Input from 'material-ui/Input';
import List, { ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';

import getInitials from './utils/getInitials';
import { chats, messages } from './mock-data';
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';

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

  paperRoot: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 8,
      paddingRight: 8,
    },
  }),

  messageAvatar: {
    marginRight: theme.spacing.unit * 2,
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

          <div className={classes.chatArea}>
            <List>
              {
                messages.map(item => (
                  <ListItem key={nanoid()}>
                    <Avatar className={classes.messageAvatar}>
                      {getInitials(item.name)}
                    </Avatar>

                    <Paper elevation={4} className={classes.paperRoot}>
                      <Typography variant="caption" component="strong">
                        {item.name}
                      </Typography>

                      <Typography component="p">
                        {item.text}
                      </Typography>

                      <Typography variant="caption" component="em">
                        {item.date}
                      </Typography>
                    </Paper>
                  </ListItem>
                ))
              }
            </List>
          </div>

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
