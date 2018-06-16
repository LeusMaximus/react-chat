/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatCreateForm from './index';

const mockProps = {
  onSubmit: jest.fn(),
};

describe('<ChatCreateForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatCreateForm {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot test', () => {
    const tree = renderer.create(<ChatCreateForm {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
