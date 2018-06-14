// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Vendor modules
import isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';

// Own modules
import Avatar from '../../components/Avatar';
import UserNav from '../../containers/UserNav';
import ChatMenu from '../../components/ChatMenu';
import { IClasses, IChatItem } from '../../interfaces/propTypes';

const styles = () => ({
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
  },
});

const ChatHeader = ({
  classes,
  activeChat,
  activeId,
  isMember,
  isCreator,
  isChatMember,
  leaveChat,
  deleteChat,
  isConnected,
}) => (
  <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      {!isEmpty(activeChat) &&
        isChatMember && (
          <ChatMenu
            disabled={!isConnected}
            className={classes.chatMenu}
            isMember={isMember}
            isCreator={isCreator}
            leaveChat={leaveChat}
            deleteChat={deleteChat}
            activeId={activeId}
          />
        )}

      {!isEmpty(activeChat) && <Avatar className={classes.chatAvatar}>{activeChat.title}</Avatar>}

      <Typography variant="title" color="inherit" noWrap>
        {_get(activeChat, 'title') || 'Super Messenger'}
      </Typography>

      <UserNav className={classes.accountBox} disabled={!isConnected} />
    </Toolbar>
  </AppBar>
);

ChatHeader.defaultProps = {
  classes: null,
  activeChat: {},
};

ChatHeader.propTypes = {
  classes: IClasses,
  activeChat: IChatItem,
  activeId: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired,
  isCreator: PropTypes.bool.isRequired,
  isChatMember: PropTypes.bool.isRequired,
  leaveChat: PropTypes.func.isRequired,
  deleteChat: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ChatHeader);
