// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// MUI icons
import AccountCircle from '@material-ui/icons/AccountCircle';

// Own modules
import ChatModal from './ChatModal';
import EditProfileForm from './EditProfileForm';
import getUserName from '../utils/getUserName';
import { IUser } from '../interfaces/propTypes';

class UserNav extends React.Component {
  static defaultProps = {
    user: null,
  };

  static propTypes = {
    logout: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    user: IUser,
    disabled: PropTypes.bool.isRequired,
    editProfile: PropTypes.func.isRequired,
  };

  state = {
    anchorEl: null,
    modalOpen: false,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleModalOpen = () => {
    this.setState({
      anchorEl: null,
      modalOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleSubmit = (params) => {
    this.props.editProfile(params).then((data) => {
      this.handleModalClose();
      return data;
    });
  };

  render() {
    const { anchorEl, modalOpen } = this.state;
    const {
      logout, className, user, disabled,
    } = this.props;

    return (
      <div className={className}>
        <span>{user && getUserName(user)}</span>

        <IconButton
          disabled={disabled}
          aria-owns={anchorEl ? 'user-nav' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Menu id="user-nav" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <MenuItem onClick={this.handleModalOpen}>Edit Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>

        <ChatModal modalOpen={modalOpen} handleModalClose={this.handleModalClose}>
          <Typography variant="title" align="center" gutterBottom>
            Edit profile
          </Typography>

          <EditProfileForm onSubmit={this.handleSubmit} user={user} />
        </ChatModal>
      </div>
    );
  }
}

export default UserNav;
