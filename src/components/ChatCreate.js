// React
import React from 'react';

// MUI Components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

// MUI icons
import AddIcon from '@material-ui/icons/Add';

// Own modules
import ChatCreateForm from './ChatCreateForm';

const styles = theme => ({
  buttonAdd: {
    position: 'absolute',
    bottom: 'calc(100% + 20px)',
    right: 25,
  },

  modalPaper: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: 'auto',
    padding: theme.spacing.unit * 2,
  },
});

class ChatCreate extends React.Component {
  state = {
    modalOpen: false,
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { classes, chatCreate } = this.props;

    return (
      <React.Fragment>
        <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          className={classes.buttonAdd}
          onClick={this.handleModalOpen}
        >
          <AddIcon />
        </Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
        >
          <div className={classes.modalPaper}>
          <Typography variant="title" align="center" gutterBottom>
            Create New Chat
          </Typography>

          <ChatCreateForm onSubmit={chatCreate} />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(ChatCreate);
