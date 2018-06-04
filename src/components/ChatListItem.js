// React
import React from 'react';

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

const styles = theme => ({
  selected: {
    backgroundColor: grey[200],
  }
})

class ChatListItem extends React.Component {
  handleClick = event => {
    event.preventDefault();

    const { item, activeId } = this.props;

    if (item._id === activeId) {
      return;
    }

    this.props.setActiveChat(this.props.item._id, true);
  }

  render() {
    const { classes, item, activeId } = this.props;

    const itemClasses = classnames({
      [classes.selected]: item._id === activeId,
    });

    return (
      <ListItem
        className={itemClasses}
        button
        component="button"
        onClick={this.handleClick}
      >
        <Avatar>
          {item.title}
        </Avatar>
        <ListItemText primary={item.title} secondary={item.date} />
      </ListItem>
    );
  }
};

export default withStyles(styles)(ChatListItem);
