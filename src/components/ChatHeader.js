// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// MUI icons
import AccountCircle from '@material-ui/icons/AccountCircle';

// MUI colors
import deepOrange from '@material-ui/core/colors/deepOrange';

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
