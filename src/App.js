import React, { Component } from 'react';

import nanoid from 'nanoid';

import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormControl } from 'material-ui/Form';
import Input from 'material-ui/Input';
import List, { ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';

import AccountCircle from '@material-ui/icons/AccountCircle';

import deepOrange from 'material-ui/colors/deepOrange';

import getInitials from './utils/getInitials';
import { chats, messages } from './mock-data';
import Sidebar from './components/Sidebar';

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

  appBar: {
    flexShrink: 1,
    minHeight: 64,
  },

  accountBox: {
    marginLeft: 'auto',
  },

  chatAvatar: {
    marginRight: '10px',
    backgroundColor: deepOrange[500],
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
          <AppBar
            position="static"
            className={classes.appBar}
          >
            <Toolbar>
              <Avatar className={classes.chatAvatar}>
                {getInitials(chatName)}
              </Avatar>

              <Typography variant="title" color="inherit" noWrap>
                {chatName}
              </Typography>

              <IconButton color="inherit" className={classes.accountBox}>
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>

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
