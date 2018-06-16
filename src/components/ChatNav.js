// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI components
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// MUI icons
import ChildCare from '@material-ui/icons/ChildCare';
import Rowing from '@material-ui/icons/Rowing';

class ChatNav extends React.Component {
  state = {
    value: 0,
  };

  static propTypes = {
    tabsChange: PropTypes.func.isRequired,
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      value: nextProps.tabNumber,
    };
  }

  render() {
    const { value } = this.state;
    const { tabsChange } = this.props;

    return (
      <BottomNavigation value={value} onChange={tabsChange} showLabels>
        <BottomNavigationAction label="My Chats" icon={<ChildCare />} />
        <BottomNavigationAction label="All Chats" icon={<Rowing />} />
      </BottomNavigation>
    );
  }
}

export default ChatNav;
