// React
import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';

import PopupMessageContent from './PopupMessageContent';

class PopupMessage extends React.Component {
  static propTypes = {
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    message: PropTypes.node.isRequired,
  };

  state = {
    open: false,
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      open: Boolean(nextProps.message),
    };
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { variant, message } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <PopupMessageContent onClose={this.handleClose} variant={variant} message={message} />
      </Snackbar>
    );
  }
}

export default PopupMessage;
