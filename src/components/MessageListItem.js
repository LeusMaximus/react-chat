// React
import React from 'react';

// MUI Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

// MUI Colors
import deepPurple from '@material-ui/core/colors//deepPurple';

// Vendor modules
import classnames from 'classnames';
import moment from 'moment';

// Own modules
import Avatar from './Avatar';
import getColorBasedOnString from '../utils/getColorBasedOnString';
import getUserName from '../utils/getUserName';

const styles = theme => ({
  ownMessageItem: {
    flexDirection: 'row-reverse',
  },

  statusMessageItem: {
    justifyContent: 'center',
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
    backgroundColor: deepPurple[50],
    color: theme.palette.common.white,
  },

  statusMessagePaper: {
    backgroundColor: 'transparent',
  },
});

const MessageListItem = ({ classes, item, userId }) => {
  const sender = item.sender || {};
  const senderName = getUserName(sender);
  const isStatusMessage = item.statusMessage;
  const isOwnMessage = sender._id === userId;
  const elevation = isStatusMessage ? 0 : 4;
  const msgDate = moment(item.createdAt).format("MMM Do YY");
  const msgDateFromNow = moment(item.createdAt).fromNow();


  const itemClasses = classnames({
    [classes.ownMessageItem]: isOwnMessage && !isStatusMessage,
    [classes.statusMessageItem]: isStatusMessage,
  });

  const paperClasses = classnames({
    [classes.messagePaper]: true,
    [classes.ownMessagePaper]: isOwnMessage,
    [classes.statusMessagePaper]: isStatusMessage,
  });

  return (
    <ListItem className={itemClasses}>
        <Avatar>
          {senderName}
        </Avatar>

      <Paper elevation={elevation} className={paperClasses}>
        <Typography variant="caption" component="strong" style={{ color: getColorBasedOnString(senderName) }}>
          {senderName}
        </Typography>

        <Typography component="p">
          {item.content}
        </Typography>

        <Tooltip title={msgDateFromNow} placement="right">
          <Typography variant="caption" component="em" style={{display: 'inline-block'}}>
            {msgDate}
          </Typography>
        </Tooltip>
      </Paper>
    </ListItem>
  );
};

export default withStyles(styles)(MessageListItem);
