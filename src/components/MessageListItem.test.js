/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import MessageListItem from './MessageListItem';

const mockProps = {
  item: {
    _id: '1000',
    updatedAt: '2017-04-14T11:45:35.200Z',
    createdAt: '2017-03-10T10:35:25.200Z',
    content: 'Test message',
    chatId: '4654646',
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageListItem {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
