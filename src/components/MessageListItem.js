// React
import React from 'react';

// MUI Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

// Vendor modules
import classnames from 'classnames';

// Own modules
import Avatar from './Avatar';

const styles = theme => ({
  ownMessageItem: {
    flexDirection: 'row-reverse',
  },

  messagePaper: theme.mixins.gutters({
    maxWidth: '70%',
    minWidth: '10%',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 8,
      paddingRight: 8,
    },
  }),

  ownMessagePaper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  }

});

const MessageListItem = ({ classes, item }) => {
  const isOwnMessage = item.sender === 'me';

  const itemClasses = classnames({
    [classes.ownMessageItem]: isOwnMessage,
  });

  const paperClasses = classnames({
    [classes.messagePaper]: true,
    [classes.ownMessagePaper]: isOwnMessage
  });

  return (
    <ListItem className={itemClasses}>
      <Avatar>
        {item.sender}
      </Avatar>

      <Paper elevation={4} className={paperClasses}>
        <Typography variant="caption" component="strong" color="inherit">
          {item.sender}
        </Typography>

        <Typography component="p" color="inherit">
          {item.content}
        </Typography>

        <Typography variant="caption" component="em" color="inherit">
          {item.date}
        </Typography>
      </Paper>
    </ListItem>
  );
};

export default withStyles(styles)(MessageListItem);
