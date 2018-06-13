/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import MessagesList from './MessagesList';

jest.mock('../components/MessageListItem', () => () => 'MessageListItem');

const mockProps = {
  messages: [],
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessagesList {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
