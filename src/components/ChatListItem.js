// React
import React from 'react';

// MUI components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Own modules
import Avatar from './Avatar';

const ChatListItem = ({ item }) => (
  <ListItem button>
    <Avatar>
      {item.title}
    </Avatar>
    <ListItemText primary={item.title} secondary={item.date} />
  </ListItem>
);

export default ChatListItem;
