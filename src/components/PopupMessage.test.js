/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import PopupMessage from './PopupMessage';

const mockProps = {
  message: 'Error',
  onClose: jest.fn(),
  variant: 'error',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PopupMessage {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
