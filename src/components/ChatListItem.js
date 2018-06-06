// React
import React from 'react';
import { Link } from 'react-router-dom';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// MUI Colors
import grey from '@material-ui/core/colors//grey';

// Vendor modules
import classnames from 'classnames';

// Own modules
import Avatar from './Avatar';
import DateView from './DateView';

const styles = theme => ({
  selected: {
    backgroundColor: grey[200],
  }
})

class ChatListItem extends React.Component {
  render() {
    const { classes, item, activeId } = this.props;

    const itemClasses = classnames({
      [classes.selected]: item._id === activeId,
    });

    return (
      <ListItem
        className={itemClasses}
        button
        component={Link}
        to={`/chat/${item._id}`}
      >
        <Avatar>
          {item.title}
        </Avatar>
        <ListItemText primary={item.title} secondary={DateView(item.createdAt)} />
      </ListItem>
    );
  }
};

export default withStyles(styles)(ChatListItem);
