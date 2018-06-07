// React
import React from 'react';
// MUI Components
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

// MUI icons
import MoreVert from '@material-ui/icons/MoreVert';

class ChatMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {
      className,
      isMember,
      isCreator,
      leaveChat,
      deleteChat,
      activeId,
      disabled,
    } = this.props;

    return (
      <div className={className}>
        <IconButton
          disabled={disabled}
          aria-owns={anchorEl ? 'chat-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          <MoreVert />
        </IconButton>

        <Menu
          id="chat-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {isMember && <MenuItem onClick={() => leaveChat(activeId)}>Leave Chat</MenuItem>}
          {isCreator && <MenuItem onClick={() => deleteChat(activeId)}>Delete Chat</MenuItem>}
        </Menu>
      </div>
    );
  }
}

export default ChatMenu;
