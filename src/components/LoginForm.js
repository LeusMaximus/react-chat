// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 4
  }
});

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: value
    }));
  }

  handleSubmit = event => {
    event.preventDefault();
    // TODO: should implement submit functionality
    alert('Soon...')
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

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

        <Button
          variant="raised"
          color="primary"
          fullWidth
          className={classes.button}
          type="submit"
        >
          Login
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
