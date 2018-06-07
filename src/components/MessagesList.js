// React
import React from 'react';

// MUI components
import List from '@material-ui/core/List';

// Vendor modules
import nanoid from 'nanoid';

// Own modules
import MessageListItem from './MessageListItem';

const MessagesList = ({ messages, userId }) => (
  <List>
    {messages.map(item => <MessageListItem key={nanoid()} item={item} userId={userId} />)}
  </List>
);

export default MessagesList;
