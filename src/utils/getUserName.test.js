/* eslint-env jest */
import getUserName from './getUserName';

const user1 = {};

const user2 = {
  username: '',
  firstName: '',
  lastName: '',
};

const user3 = {
  username: 'lorem',
  firstName: '',
  lastName: '',
};

const user4 = {
  username: 'lorem',
  firstName: 'ipsum',
  lastName: '',
};

const user5 = {
  username: 'lorem',
  firstName: '',
  lastName: 'dolore',
};

const user6 = {
  username: 'lorem',
  firstName: 'ipsum',
  lastName: 'dolore',
};

it('return current user name', () => {
  expect(getUserName(user1)).toEqual('');
  expect(getUserName(user2)).toEqual('');
  expect(getUserName(user3)).toEqual('lorem');
  expect(getUserName(user4)).toEqual('lorem');
  expect(getUserName(user5)).toEqual('lorem');
  expect(getUserName(user6)).toEqual('ipsum dolore');
});
