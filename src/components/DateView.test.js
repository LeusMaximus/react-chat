/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import DateView from './DateView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
