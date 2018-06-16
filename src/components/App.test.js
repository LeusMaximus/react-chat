/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('../containers/ChatPage', () => () => 'ChatPage');
jest.mock('../containers/LoginPage', () => () => 'LoginPage');
jest.mock('../containers/SignupPage', () => () => 'SignupPage');
jest.mock('../containers/PrivateRoute', () => () => 'PrivatRoute');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
