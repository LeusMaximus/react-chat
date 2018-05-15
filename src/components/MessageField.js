// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  messageField: {
    flexShrink: 1,
    marginBottom: 15,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const MessageField = ({ classes }) => (
  <Paper elevation={10} className={classes.messageField}>
    <FormControl fullWidth>
        <Input placeholder="Type your message..." />
      </FormControl>
  </Paper>
);

export default withStyles(styles)(MessageField);
