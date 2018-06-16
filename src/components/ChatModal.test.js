/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatModal from './ChatModal';

const mockProps = {
  modalOpen: false,
  handleModalOpen: jest.fn(),
  handleModalClose: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatModal {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
