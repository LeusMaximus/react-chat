import React from 'react';

// MUI Components
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

// Vendor modules
import moment from 'moment';

const DateView = ({ date }) => {
  const formatDate = moment(date).format("MMM Do YY");
  const formatDateFromNow = moment(date).fromNow();

  return (
    <Tooltip title={formatDate} placement="right">
      <Typography variant="caption" component="em" style={{display: 'inline-block'}}>
        {formatDateFromNow}
      </Typography>
    </Tooltip>
  );
};

export default DateView;
