/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatCreateForm from './ChatCreateForm';

const mockProps = {
  onSubmit: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatCreateForm {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
