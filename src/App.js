import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import AccountCircle from '@material-ui/icons/AccountCircle';

import deepOrange from 'material-ui/colors/deepOrange';

const styles = theme => ({
  flex: {
    flex: 1,
  },

  appFrame: {
    display: 'flex',
    height: '100vh',
  },

  mainArea: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },

  appBar: {

  },

  chatAvatar: {
    marginRight: '10px',
    backgroundColor: deepOrange[500],
  },

  drawerPaper: {
    position: 'relative',
    width: 320,
  },

  toolbar: theme.mixins.toolbar,
});

const getAvatarAbbr = str => (
  str
    .split(' ')
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('')
);


class App extends Component {
  render() {
    const { classes, chatName } = this.props;

    return (
      <div className={classes.appFrame}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
        </Drawer>

        <div className={classes.mainArea}>
          <AppBar
            position="sticky"
            className={classes.appBar}
          >
            <Toolbar>
              <Avatar className={classes.chatAvatar}>
                {getAvatarAbbr(chatName)}
              </Avatar>

              <Typography variant="title" color="inherit" className={classes.flex} noWrap>
                {chatName}
              </Typography>

              <div>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
