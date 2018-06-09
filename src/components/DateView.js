// React
import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

// Vendor modules
import moment from 'moment';

const DateView = ({ date }) => {
  const formatDate = date ? moment(date).format('MMM Do YY') : '';
  const formatDateFromNow = date ? moment(date).fromNow() : '';

  return (
    <Tooltip title={formatDate} placement="right">
      <Typography variant="caption" component="em" style={{ display: 'inline-block' }}>
        {formatDateFromNow}
      </Typography>
    </Tooltip>
  );
};

DateView.defaultProps = {
  date: '',
};

DateView.propTypes = {
  date: PropTypes.string,
};

export default DateView;
