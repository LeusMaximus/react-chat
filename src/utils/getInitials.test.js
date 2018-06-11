/* eslint-env jest */
import getInitials from './getInitials';

it('return current initials', () => {
  expect(getInitials(' lorem ipsum ')).toEqual('LI');
  expect(getInitials('lorem impsum dolore')).toEqual('LI');
  expect(getInitials(' lorem ')).toEqual('L');
  expect(getInitials('_lorem 5impsum')).toEqual('_5');
  expect(getInitials(' ')).toEqual('-');
});
