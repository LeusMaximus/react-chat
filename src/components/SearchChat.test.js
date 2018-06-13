/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchChat from './SearchChat';

const mockProps = {
  onChange: jest.fn(),
  term: 'some',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchChat {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
