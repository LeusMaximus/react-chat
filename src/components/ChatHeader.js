// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Own modules
import Avatar from './Avatar';
import UserNav from '../containers/UserNav';

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
  },
});

const ChatHeader = ({ classes, chatName }) => (
  <AppBar
    position="static"
    className={classes.appBar}
  >
    <Toolbar>
      <Avatar className={classes.chatAvatar}>
        {chatName}
      </Avatar>

      <Typography variant="title" color="inherit" noWrap>
        {chatName}
      </Typography>

      <UserNav className={classes.accountBox} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
