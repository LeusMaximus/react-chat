// React
import React from 'react';

// MUI components
import List from '@material-ui/core/List';

// vendor modules
import nanoid from 'nanoid';

// Own modules
import ChatListItem from './ChatListItem';

const ChatList = ({ chats, setActiveChat, activeId }) => (
  <List component="div">
    {chats.map(item => <ChatListItem key={nanoid()} item={item} setActiveChat={setActiveChat} activeId={activeId} />)}
  </List>
);

export default ChatList;
