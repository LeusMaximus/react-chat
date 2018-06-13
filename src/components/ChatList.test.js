/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatList from './ChatList';

jest.mock('./ChatListItem', () => () => 'ChatListItem');

const mockProps = {
  chats: [
    {
      _id: '1000',
      title: 'Chat 1',
      createdAt: '2014-02-16T10:44:32.200Z',
      updatedAt: '2017-04-14T11:45:35.200Z',
    },
    {
      _id: '2000',
      title: 'Chat 2',
      createdAt: '2017-04-12T11:24:35.200Z',
      updatedAt: '2017-04-14T11:45:35.200Z',
    },
  ],
  disabled: false,
  setActiveChat: jest.fn(),
  activeId: '1000',
  searchTerm: 'some',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatList {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
