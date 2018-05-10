import React, { Component } from 'react';

import nanoid from 'nanoid';

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
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';
import ChildCare from '@material-ui/icons/ChildCare';
import Rowing from '@material-ui/icons/Rowing';
import AddIcon from '@material-ui/icons/Add';

import deepOrange from 'material-ui/colors/deepOrange';

const chatsMock = [
  {
    name: 'Some Chat Name',
    date: 'Jan 9, 2014'
  },

  {
    name: 'React Chat',
    date: '1 month ago'
  },

  {
    name: 'Cars',
    date: '12 days ago'
  },

  {
    name: 'Footbal Chat',
    date: '10 hours ago'
  },

  {
    name: 'Some Chat Name',
    date: 'Jan 9, 2014'
  },

  {
    name: 'React Chat',
    date: '1 month ago'
  },

  {
    name: 'Cars',
    date: '12 days ago'
  },

  {
    name: 'Footbal Chat',
    date: '10 hours ago'
  },
  {
    name: 'Some Chat Name',
    date: 'Jan 9, 2014'
  },

  {
    name: 'React Chat',
    date: '1 month ago'
  },

  {
    name: 'Cars',
    date: '12 days ago'
  },

  {
    name: 'Footbal Chat',
    date: '10 hours ago'
  },
  {
    name: 'Cars',
    date: '12 days ago'
  },

  {
    name: 'Footbal Chat',
    date: '10 hours ago'
  },
  {
    name: 'Some Chat Name',
    date: 'Jan 9, 2014'
  },

  {
    name: 'React Chat',
    date: '1 month ago'
  },

  {
    name: 'Cars',
    date: '12 days ago'
  },

  {
    name: 'Footbal Chat',
    date: '10 hours ago'
  },
];

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
    height: '100%',
    overflow: 'hidden',
  },

  drawerTopToolbar: {
    ...theme.mixins.toolbar,
    flexShrink: 1,
  },

  searchChats: {
    paddingTop: 5,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    overflow: 'hidden',
  },

  chatsListHolder: {
    flexShrink: 1,
    flexGrow: 1,
    overflowY: 'scroll'
  },

  chatNav: {
    position: 'relative',
    marginTop: 'auto',
    flexShrink: 1,
  },

  buttonAdd: {
    position: 'absolute',
    bottom: 'calc(100% + 20px)',
    right: 25,
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
          <div className={classes.drawerTopToolbar}>
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

          <div className={classes.chatsListHolder}>
            <List>
              {
                chatsMock.map(item => (
                  <ListItem button key={nanoid()}>
                    <Avatar>
                      {getAvatarAbbr(item.name)}
                    </Avatar>
                    <ListItemText primary={item.name} secondary={item.date} />
                  </ListItem>
                ))
              }
            </List>
          </div>

          <div className={classes.chatNav}>
            <Divider />

            <Button variant="fab" color="secondary" aria-label="add" className={classes.buttonAdd}>
              <AddIcon />
            </Button>

            <BottomNavigation showLabels>
              <BottomNavigationAction label="My Chats" icon={<ChildCare />} />
              <BottomNavigationAction label="All Chats" icon={<Rowing />} />
            </BottomNavigation>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
