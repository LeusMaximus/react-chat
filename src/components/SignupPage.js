// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Own modules
import PageHeader from './PageHeader';
import SignupForm from './SignupForm';

const styles = theme => ({
  contentWrapper: {
    padding: theme.spacing.unit * 3,
  },

  formHolder: {
    ...theme.mixins.gutters({
      paddingTop: theme.spacing.unit * 3,
      paddingBottom:theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 'auto',
      marginRight: 'auto',
    }),
    maxWidth: 500,
  },
});
const SignupPage = ({ classes }) => (
  <div>
    <PageHeader />

    <div className={classes.contentWrapper}>
      <Typography variant="headline" component="h1" align="center" gutterBottom>
        Join Chat
      </Typography>

      <Paper elevation={10} className={classes.formHolder}>
        <SignupForm />
      </Paper>
    </div>
  </div>
);

export default withStyles(styles)(SignupPage);
