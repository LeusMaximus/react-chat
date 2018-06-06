// React
import React from 'react';

// MUI Components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// MUI icons
import AddIcon from '@material-ui/icons/Add';

// Own modules
import ChatCreateForm from './ChatCreateForm';
import ChatModal from './ChatModal';

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

  handleSubmit = chatName => {
    this.props.createChat(chatName)
      .then(data => {
        this.handleModalClose();
        return data;
      });
  };

  render() {
    const { modalOpen } = this.state;
    const { classes } = this.props;

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

        <ChatModal modalOpen={modalOpen} handleModalClose={this.handleModalClose}>
          <Typography variant="title" align="center" gutterBottom>
            Create New Chat
          </Typography>

          <ChatCreateForm onSubmit={this.handleSubmit} />
        </ChatModal>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(ChatCreate);
