/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './MessageField';

const mockProps = {
  isChatMember: true,
  disabled: false,
  joinChat: jest.fn(),
  sendMessage: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageField {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
