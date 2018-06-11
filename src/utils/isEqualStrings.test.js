/* eslint-env jest */
import isEqualStrings from './isEqualStrings';

it('check strings are equal', () => {
  expect(isEqualStrings()).not.toBe(true);
  expect(isEqualStrings(['Hello'])).toBe(true);
  expect(isEqualStrings(['Hello', ' Hello '])).toBe(true);
  expect(isEqualStrings(['Hello', 'Hello', ' Hello '])).toBe(true);
  expect(isEqualStrings(['Hello', 'hello'])).not.toBe(true);
});
