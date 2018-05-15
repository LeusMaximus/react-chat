// React
import React from 'react';

// MUI components
import List from '@material-ui/core/List';

// vendor modules
import nanoid from 'nanoid';

// Own modules
import ChatListItem from './ChatListItem';

const ChatList = ({ chats }) => (
  <List>
    {chats.map(item => <ChatListItem key={nanoid()} item={item} />)}
  </List>
);

export default ChatList;
