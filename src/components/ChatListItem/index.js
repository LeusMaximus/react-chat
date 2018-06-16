// React
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// MUI Colors
import grey from '@material-ui/core/colors//grey';

// Vendor modules
import classnames from 'classnames';

// Own modules
import Avatar from '../Avatar';
import DateView from '../DateView';
import { IClasses, IChatItem } from '../../interfaces/propTypes';

const styles = () => ({
  selected: {
    backgroundColor: grey[200],
  },
});

const ChatListItem = ({
  classes, item, activeId, disabled,
}) => {
  const itemClasses = classnames({
    [classes.selected]: item._id === activeId,
  });

  return (
    <ListItem
      disabled={disabled}
      className={itemClasses}
      button
      component={Link}
      to={`/chat/${item._id}`}
    >
      <Avatar>{item.title}</Avatar>
      <ListItemText primary={item.title} secondary={<DateView date={item.createdAt} />} />
    </ListItem>
  );
};

ChatListItem.propTypes = {
  classes: IClasses.isRequired,
  item: IChatItem.isRequired,
  activeId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ChatListItem);
