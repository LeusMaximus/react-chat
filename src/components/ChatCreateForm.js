// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Own modules
import isTextFieldValid from '../utils/isTextFieldValid';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 4,
  },
});

class ChatCreateForm extends React.Component {
  state = {
    chatName: {
      value: '',
      isValid: true,
    },
  };

  validate = () => {
    const { chatName } = this.state;
    const isChatNameValid = isTextFieldValid(chatName.value);

    this.setState({
      chatName: {
        ...chatName,
        isValid: isChatNameValid,
      },
    });

    return isChatNameValid;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const isValid = this.validate();

    if (!isValid) return;

    const { chatName } = this.state;

    this.props.onSubmit(chatName.value);
  }

  render() {
    const { classes } = this.props;
    const { chatName } = this.state;

    return (
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          label="Type chat name"
          name="chatName"
          value={chatName.value}
          fullWidth
          required
          autoFocus
          margin="normal"
          onChange={this.handleChange}
          error={!chatName.isValid}
        />

        <Button
          variant="raised"
          color="primary"
          fullWidth
          className={classes.button}
          type="submit"
        >
          Create
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(ChatCreateForm);
