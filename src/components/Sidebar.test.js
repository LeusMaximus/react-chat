/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

jest.mock('./SearchChat', () => () => 'SearchChat');
jest.mock('./ChatList', () => () => 'ChatList');
jest.mock('./ChatNav', () => () => 'ChatNav');
jest.mock('../containers/ChatCreate', () => () => 'ChatCreate');

const mockProps = {
  allChats: [],
  myChats: [],
  setActiveChat: jest.fn(),
  isConnected: true,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
