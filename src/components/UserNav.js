// React
import React from 'react';
// MUI Components
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// MUI icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChatModal from './ChatModal';
import EditProfileForm from './EditProfileForm';

class UserNav extends React.Component {
  state = {
    anchorEl: null,
    modalOpen: false,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleModalOpen = () => {
    this.setState({
      anchorEl: null,
      modalOpen: true
    });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleSubmit = params => {
    this.props.editProfile(params)
      .then(data => {
        this.handleModalClose();
        return data;
      });
  };

  render() {
    const { anchorEl, modalOpen } = this.state;
    const { logout, className, user } = this.props;

    return (
      <div className={className}>
        <IconButton
          aria-owns={anchorEl ? 'user-nav' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Menu
          id="user-nav"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleModalOpen}>Edit Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>

        <ChatModal modalOpen={modalOpen} handleModalClose={this.handleModalClose}>
          <Typography variant="title" align="center" gutterBottom>
            Edit profile
          </Typography>

          <EditProfileForm onSubmit={this.handleSubmit} user={user}/>
        </ChatModal>
      </div>
    );
  }
}

export default UserNav;
