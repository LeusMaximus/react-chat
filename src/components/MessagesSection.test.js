/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import MessagesSection from './MessagesSection';

jest.mock('../components/MessagesList', () => () => 'MessagesList');
jest.mock('../components/MessageField', () => () => 'MessageField');

const mockProps = {
  chat: {
    _id: '1000',
    updatedAt: '2017-04-14T11:45:35.200Z',
    createdAt: '2017-03-10T10:35:25.200Z',
    title: 'Test Chat',
  },
  isChatMember: true,
  joinChat: jest.fn(),
  sendMessage: jest.fn(),
  messages: [],
  isConnected: true,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessagesSection {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
