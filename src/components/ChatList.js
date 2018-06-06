// React
import React from 'react';

// MUI components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// vendor modules
import nanoid from 'nanoid';

// Own modules
import ChatListItem from './ChatListItem';

const ChatList = ({ chats, setActiveChat, activeId, searchTerm, disabled }) => {
  const filteredChats = chats
    .filter(item => item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    )
    .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
    );

  return (
    <List component="div">
      {
        filteredChats.length
          ? filteredChats.map(item => <ChatListItem key={nanoid()} item={item} setActiveChat={setActiveChat} activeId={activeId} disabled={disabled} />)
          : <ListItem component="div">
              <ListItemText primary={'No chats found...'} />
            </ListItem>
        }
    </List>
  );
};

export default ChatList;
