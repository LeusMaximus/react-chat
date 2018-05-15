// React
import React from 'react';

// MUI components
import List from '@material-ui/core/List';

// Vendor modules
import nanoid from 'nanoid';

// Own modules
import MessageListItem from './MessageListItem';

const MessagesList = ({ classes, messages }) => (
  <List>
    {messages.map(item => <MessageListItem key={nanoid()} item={item} />)}
  </List>
);

export default MessagesList;
