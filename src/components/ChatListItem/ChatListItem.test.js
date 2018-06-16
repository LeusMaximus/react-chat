/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import ChatListItem from './index';

jest.mock('../DateView', () => () => 'a year ago');

const mockProps = {
  item: {
    _id: '1000',
    updatedAt: '2017-04-14T11:45:35.200Z',
    createdAt: '2017-03-10T10:35:25.200Z',
    title: 'Test Chat',
  },
  activeId: '1000',
  disabled: false,
};

describe('<ChatListItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ChatListItem {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot test', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <ChatListItem {...mockProps} />
              </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
