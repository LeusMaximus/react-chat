/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatCreate from './ChatCreate';

const mockProps = {
  disabled: false,
  createChat: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatCreate {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
