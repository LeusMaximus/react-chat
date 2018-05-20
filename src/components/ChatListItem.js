// React
import React from 'react';

// MUI components
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

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
