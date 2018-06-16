/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatPage from './ChatPage';

jest.mock('./Sidebar', () => () => 'Sidebar');
jest.mock('./ChatHeader', () => () => 'ChatHeader');
jest.mock('./MessagesSection', () => () => 'MessageSection');
jest.mock('./PopupMessage', () => () => '<PopupMessage></PopupMessage>');

const mockProps = {
  match: {
    params: {},
  },
  getAllChats: jest.fn(),
  getMyChats: jest.fn(),
  setActiveChat: jest.fn(),
  socketsConnect: jest.fn(),
  mountChat: jest.fn(),
  unmountChat: jest.fn(),
  activeId: '1000',
  allChats: [],
  myChats: [],
  joinChat: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  sendMessage: jest.fn(),
  isMember: true,
  isCreator: false,
  isChatMember: true,
  messages: [],
  isConnected: true,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatPage {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
