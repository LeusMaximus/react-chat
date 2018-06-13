/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatNav from './ChatNav';

const mockProps = {
  tabsChange: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatNav {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
