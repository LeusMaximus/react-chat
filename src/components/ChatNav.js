// React
import React from 'react';

// MUI components
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// MUI icons
import ChildCare from '@material-ui/icons/ChildCare';
import Rowing from '@material-ui/icons/Rowing';

const ChatNav = () => (
  <BottomNavigation showLabels>
    <BottomNavigationAction label="My Chats" icon={<ChildCare />} />
    <BottomNavigationAction label="All Chats" icon={<Rowing />} />
  </BottomNavigation>
);

export default ChatNav;