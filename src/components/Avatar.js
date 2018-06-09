// React
import React from 'react';
import PropTypes from 'prop-types';

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

Avatar.defaultProps = {
  children: '',
};

Avatar.propTypes = {
  children: PropTypes.string,
};

export default Avatar;
