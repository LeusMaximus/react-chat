// React
import React from 'react';
import { Link } from 'react-router-dom';

// MUI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const ChatHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          React Chat
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default ChatHeader;
