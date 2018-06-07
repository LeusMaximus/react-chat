// React
import React from 'react';

// MUI Components
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';

// MUI Icons
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  modalPaper: {
    position: 'relative',
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: 'auto',
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 5,
  },

  btnClose: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

const ChatCreate = ({
  classes, modalOpen, handleModalClose, children,
}) => (
  <React.Fragment>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modalOpen}
      onClose={handleModalClose}
    >
      <div className={classes.modalPaper}>
        {children}

        <IconButton
          className={classes.btnClose}
          onClick={handleModalClose}
        >
          <Close />
        </IconButton>
      </div>
    </Modal>
  </React.Fragment>
);

export default withStyles(styles)(ChatCreate);
