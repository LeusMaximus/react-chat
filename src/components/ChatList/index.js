// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// vendor modules
import nanoid from 'nanoid';

// Own modules
import ChatListItem from '../ChatListItem';
import { IChatItem } from '../../interfaces/propTypes';

const ChatList = ({
  chats, setActiveChat, activeId, searchTerm, disabled,
}) => {
  const filteredChats = chats
    .filter(item => item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((one, two) =>
      (one.title && two.title && one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1));

  return (
    <List component="div">
      {filteredChats.length ? (
        filteredChats.map(item => (
          <ChatListItem
            key={nanoid()}
            item={item}
            setActiveChat={setActiveChat}
            activeId={activeId}
            disabled={disabled}
          />
        ))
      ) : (
        <ListItem component="div">
          <ListItemText primary="No chats found..." />
        </ListItem>
      )}
    </List>
  );
};

ChatList.propTypes = {
  chats: PropTypes.arrayOf(IChatItem.isRequired).isRequired,
  setActiveChat: PropTypes.func.isRequired,
  activeId: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ChatList;
