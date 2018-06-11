/* eslint-env jest */
import isTextFieldValid from './isTextFieldValid';

it('check string is valid', () => {
  expect(isTextFieldValid(' ')).not.toBe(true);
  expect(isTextFieldValid('a')).toBe(true);
});
