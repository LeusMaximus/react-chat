/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import ChatHeader from './index';

jest.mock('../ChatMenu', () => () => 'ChatMenu');
jest.mock('../Avatar', () => () => 'Avatar');
jest.mock('../../containers/UserNav', () => () => 'UserNav');

const mockProps = {
  activeChat: {
    _id: '1000',
    updatedAt: '2017-04-14T11:45:35.200Z',
    createdAt: '2017-03-10T10:35:25.200Z',
    title: 'Test Chat',
  },
  activeId: '1000',
  isMember: false,
  isCreator: true,
  isChatMember: true,
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  isConnected: true,
};

describe('<ChatHeader />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatHeader {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot test when active chat is', () => {
    const tree = renderer.create(<ChatHeader {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('snapshot test when no any active chats', () => {
    const tree = renderer.create(<ChatHeader {...mockProps} activeChat={null} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
