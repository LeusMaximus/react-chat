/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import UserNav from './UserNav';

const mockProps = {
  logout: jest.fn(),
  className: '',
  disabled: false,
  editProfile: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserNav {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
