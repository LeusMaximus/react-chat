// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Own modules
import isTextFieldValid from '../utils/isTextFieldValid';
import isEqualStrings from '../utils/isEqualStrings';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 4,
  },
});

class SignupForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatPassword: {
      value: '',
      isValid: true,
    },
  };

  validate = () => {
    const { username, password, repeatPassword } = this.state;
    const isUserNameValid = isTextFieldValid(username.value);
    const isPasswordValid = isTextFieldValid(password.value);
    const isRepeatPasswordValid = isEqualStrings(password.value, repeatPassword.value);

    this.setState({
      username: {
        ...username,
        isValid: isUserNameValid,
      },
      password: {
        ...password,
        isValid: isPasswordValid,
      },
      repeatPassword: {
        ...repeatPassword,
        isValid: isRepeatPasswordValid,
      },
    });

    return isUserNameValid && isPasswordValid && isRepeatPasswordValid;
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const isValid = this.validate();

    if (!isValid) return;

    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { classes } = this.props;
    const { username, password, repeatPassword } = this.state;

    return (
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={username.value}
          fullWidth
          required
          margin="normal"
          onChange={this.handleChange}
          error={!username.isValid}
        />

        <TextField
          label="Password"
          name="password"
          value={password.value}
          type="password"
          fullWidth
          required
          margin="normal"
          onChange={this.handleChange}
          error={!password.isValid}
        />

        <TextField
          label="Repeat Password"
          name="repeatPassword"
          value={repeatPassword.value}
          type="password"
          fullWidth
          required
          margin="normal"
          onChange={this.handleChange}
          error={!repeatPassword.isValid}
        />

        <Button variant="raised" color="primary" fullWidth className={classes.button} type="submit">
          Create an account
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignupForm);
