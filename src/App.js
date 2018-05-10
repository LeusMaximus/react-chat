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
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';

import deepOrange from 'material-ui/colors/deepOrange';

const styles = theme => {console.log(theme);
 return {
  appFrame: {
    display: 'flex',
    flexDirection: 'row-reverse',
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

  accountBox: {
    marginLeft: 'auto',
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

  searchChats: {
    paddingTop: 5,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
}};

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

        <div className={classes.mainArea}>
          <AppBar
            position="sticky"
            className={classes.appBar}
          >
            <Toolbar>
              <Avatar className={classes.chatAvatar}>
                {getAvatarAbbr(chatName)}
              </Avatar>

              <Typography variant="title" color="inherit" noWrap>
                {chatName}
              </Typography>

              <IconButton color="inherit" className={classes.accountBox}>
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>

        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar}>
            <div className={classes.searchChats}>
              <FormControl fullWidth>
                <InputLabel htmlFor="search_chat">Search chats...</InputLabel>

                <Input
                  id="search_chat"
                  endAdornment={
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </div>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
