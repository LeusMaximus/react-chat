/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avatar>Test Title</Avatar>, div);
  ReactDOM.unmountComponentAtNode(div);
});
