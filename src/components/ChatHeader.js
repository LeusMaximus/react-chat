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
import ChatMenu from '../components/ChatMenu';

// Vendor modules
import isEmpty from 'lodash.isempty';

const styles = theme => ({
  appBar: {
    flexShrink: 1,
    minHeight: 64,
  },

  accountBox: {
    marginLeft: 'auto',
  },

  chatAvatar: {
    marginRight: 10,
  },

  chatMenu: {
    marginRight: 10,
  }
});

const ChatHeader = ({ classes, activeChat, isMember, isCreator, isChatMember, leaveChat, activeId }) => (
  <AppBar
    position="static"
    className={classes.appBar}
  >
    <Toolbar>
      {!isEmpty(activeChat) && isChatMember &&
        <ChatMenu
          className={classes.chatMenu}
          isMember={isMember}
          isCreator={isCreator}
          leaveChat={leaveChat}
          activeId={activeId}
        />
      }

      {!isEmpty(activeChat) &&
        <Avatar className={classes.chatAvatar}>
          {activeChat.title}
        </Avatar>
      }

      <Typography variant="title" color="inherit" noWrap>
        {!isEmpty(activeChat) ? activeChat.title : 'Super Messenger'}
      </Typography>

      <UserNav className={classes.accountBox} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
