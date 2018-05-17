// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Vendor modules
import fetch from 'isomorphic-fetch';

import config from '../config';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 4
  }
});

class SignupForm extends React.Component {
  state = {
    username: '',
    password: '',
    repeatPassword: '',
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: value
    }));
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    // TODO: need change

    fetch(`${config.API_URI}/signup`, {
      method: "POST",
      headers: {
        'Accept': 'spplication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  render() {
    const { classes } = this.props;
    const { username, password, repeatPassword } = this.state;

    return (
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={username}
          fullWidth
          required
          margin="normal"
          onChange={this.handleChange}
        />

        <TextField
          label="Password"
          name="password"
          value={password}
          type="password"
          fullWidth
          required
          margin="normal"
          onChange={this.handleChange}
        />

        <TextField
          label="Repeat Password"
          name="repeatPassword"
          value={repeatPassword}
          type="password"
          fullWidth
          required
          margin="normal"
          onChange={this.handleChange}
        />

        <Button
          variant="raised"
          color="primary"
          fullWidth
          className={classes.button}
          type="submit"
        >
          Create an account
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignupForm);
