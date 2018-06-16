// React
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// MUI components
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Own modules
import PageHeader from './PageHeader';
import SignupForm from './SignupForm';
import PopupMessage from './PopupMessage';
import { IClasses } from '../interfaces/propTypes';

const styles = theme => ({
  contentWrapper: {
    padding: theme.spacing.unit * 3,
  },

  formHolder: {
    ...theme.mixins.gutters({
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 'auto',
      marginRight: 'auto',
    }),
    maxWidth: 500,
  },
});

const SignupPage = ({
  classes, signup, isAuthenticated, error,
}) => {
  if (isAuthenticated) {
    return <Redirect to="/chat" />;
  }

  return (
    <div>
      <PageHeader />

      <div className={classes.contentWrapper}>
        <Typography variant="headline" component="h1" align="center" gutterBottom>
          Join Chat
        </Typography>

        <Paper elevation={10} className={classes.formHolder}>
          <SignupForm onSubmit={signup} />
        </Paper>
      </div>

      {error && <PopupMessage variant="error" message={error.message} />}
    </div>
  );
};

SignupPage.defaultProps = {
  error: null,
};

SignupPage.propTypes = {
  classes: IClasses.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
};

export default withStyles(styles)(SignupPage);
