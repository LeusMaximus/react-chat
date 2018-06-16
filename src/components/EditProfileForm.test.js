/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import EditProfileForm from './EditProfileForm';

const mockProps = {
  onSubmit: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditProfileForm {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
