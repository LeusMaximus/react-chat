import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import deepOrange from 'material-ui/colors/deepOrange';

const styles = theme => ({
  appFrame: {
    display: 'flex',
    height: '100vh',
  },

  flex: {
    flex: 1,
  },

  chatAvatar: {
    marginRight: '10px',
    backgroundColor: deepOrange[500],
  }
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

        <AppBar
          position="absolute"
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
    );
  }
}

export default withStyles(styles)(App);
