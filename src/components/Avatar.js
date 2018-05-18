// React
import React from 'react';

// MUI Components
import MUIAvatar from '@material-ui/core/Avatar';

// Own modules
import getInitials from '../utils/getInitials';
import getColorBasedOnString from '../utils/getColorBasedOnString';

const Avatar = ({ children, ...rest }) => (
  <MUIAvatar style={{ backgroundColor: getColorBasedOnString(children) }} {...rest}>
    {getInitials(children)}
  </MUIAvatar>
);

export default Avatar;
