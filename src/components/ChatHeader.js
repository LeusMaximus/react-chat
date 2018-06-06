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
import isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';

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

const ChatHeader = ({
  classes, activeChat, activeId,
  isMember, isCreator, isChatMember,
  leaveChat, deleteChat, isConnected
}) => (
  <AppBar
    position="static"
    className={classes.appBar}
  >
    <Toolbar>
      {!isEmpty(activeChat) && isChatMember &&
        <ChatMenu
          disabled={!isConnected}
          className={classes.chatMenu}
          isMember={isMember}
          isCreator={isCreator}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          activeId={activeId}
        />
      }

      {!isEmpty(activeChat) &&
        <Avatar className={classes.chatAvatar}>
          {activeChat.title}
        </Avatar>
      }

      <Typography variant="title" color="inherit" noWrap>
        {_get(activeChat, 'title') || 'Super Messenger'}
      </Typography>

      <UserNav className={classes.accountBox} disabled={!isConnected} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
