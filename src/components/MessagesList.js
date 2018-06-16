// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI components
import List from '@material-ui/core/List';

// Vendor modules
import nanoid from 'nanoid';

// Own modules
import MessageListItem from './MessageListItem';
import { IMessage } from '../interfaces/propTypes';

const MessagesList = ({ messages, userId }) => (
  <List>
    {messages.map(item => <MessageListItem key={nanoid()} item={item} userId={userId} />)}
  </List>
);

MessagesList.defaultProps = {
  userId: '',
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(IMessage.isRequired).isRequired,

  userId: PropTypes.string,
};

export default MessagesList;
