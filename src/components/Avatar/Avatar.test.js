/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Avatar from './index';

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar>Test Title</Avatar>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot test', () => {
    const tree = renderer.create(<Avatar>Test Avatar</Avatar>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
