// React
import React from 'react';

// MUI components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

// Own modules
import getInitials from '../utils/getInitials';

const ChatListItem = ({ item }) => (
  <ListItem button>
    <Avatar>
      {getInitials(item.title)}
    </Avatar>
    <ListItemText primary={item.title} secondary={item.date} />
  </ListItem>
);

export default ChatListItem;
