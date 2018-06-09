// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

// MUI Colors
import deepPurple from '@material-ui/core/colors//deepPurple';

// Vendor modules
import classnames from 'classnames';

// Own modules
import Avatar from './Avatar';
import getColorBasedOnString from '../utils/getColorBasedOnString';
import getUserName from '../utils/getUserName';
import DateView from './DateView';
import { IClasses, IMessage } from '../interfaces/propTypes';

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
      <Avatar>{senderName}</Avatar>

      <Paper elevation={elevation} className={paperClasses}>
        <Typography
          variant="caption"
          component="strong"
          style={{ color: getColorBasedOnString(senderName) }}
        >
          {senderName}
        </Typography>

        <Typography component="p">{item.content}</Typography>

        <DateView date={item.createdAt} />
      </Paper>
    </ListItem>
  );
};

MessageListItem.propTypes = {
  classes: IClasses.isRequired,
  item: IMessage.isRequired,
  userId: PropTypes.string.isRequired,
};

export default withStyles(styles)(MessageListItem);
