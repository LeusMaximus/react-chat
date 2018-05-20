// React
import React from 'react';

// MUI components
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

// MUI icons
import AccountCircle from '@material-ui/icons/AccountCircle';

// MUI colors
import deepOrange from 'material-ui/colors/deepOrange';

// Own modules
import getInitials from '../utils/getInitials';

const styles = theme => ({
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
});

const ChatHeader = ({ classes, chatName }) => (
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
);

export default withStyles(styles)(ChatHeader);
