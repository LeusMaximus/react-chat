/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import LoginPage from './LoginPage';

const mockProps = {
  login: jest.fn(),
  isAuthenticated: true,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/login" render={props => <LoginPage {...mockProps} {...props} />} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
