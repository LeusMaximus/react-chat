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
import Paper from 'material-ui/Paper';

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

const messagesMock = [
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: 'Jan 9, 2014'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Sed porttitor lectus nibh. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
    date: '10 hours ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '1 month ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '10 hours ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '10 hours ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '10 hours ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '10 hours ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '10 hours ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '10 hours ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '10 hours ago'
  },
  {
    name: 'Lorem Ipsum',
    text: 'Hello!',
    date: '10 hours ago'
  },
  {
    name: 'Last Message',
    text: 'Hello!',
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
    }
  };
};

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
            position="static"
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

          <div className={classes.chatArea}>
            <List>
              {
                messagesMock.map(item => (
                  <ListItem key={nanoid()}>
                    <Avatar className={classes.messageAvatar}>
                      {getAvatarAbbr(item.name)}
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
