// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI components
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Own modules
import isTextFieldValid from '../utils/isTextFieldValid';
import { IClasses, IUser } from '../interfaces/propTypes';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 4,
  },
});

class EditProfileForm extends React.Component {
  static propTypes = {
    classes: IClasses.isRequired,
    user: IUser.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { user } = this.props;
    const getObjValue = (obj, key) => (obj && obj[key] ? obj[key] : '');

    this.state = {
      username: {
        value: getObjValue(user, 'username'),
        isValid: true,
      },
      firstName: {
        value: getObjValue(user, 'firstName'),
      },
      lastName: {
        value: getObjValue(user, 'lastName'),
      },
    };
  }

  validate = () => {
    const { username } = this.state;
    const isUserNameValid = isTextFieldValid(username.value);

    this.setState({
      username: {
        ...username,
        isValid: isUserNameValid,
      },
    });

    return isUserNameValid;
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

    const { username, firstName, lastName } = this.state;

    this.props.onSubmit({
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { username, firstName, lastName } = this.state;

    return (
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={username.value}
          fullWidth
          required
          autoFocus
          margin="normal"
          onChange={this.handleChange}
          error={!username.isValid}
        />

        <TextField
          label="First name"
          name="firstName"
          value={firstName.value}
          fullWidth
          margin="normal"
          onChange={this.handleChange}
        />

        <TextField
          label="Last name"
          name="lastName"
          value={lastName.value}
          fullWidth
          margin="normal"
          onChange={this.handleChange}
        />

        <Button variant="raised" color="primary" fullWidth className={classes.button} type="submit">
          Save
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(EditProfileForm);
