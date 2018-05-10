import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  appFrame: {
    display: 'flex',
    height: '100vh',
  },

  flex: {
    flex: 1,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.appFrame}>
        <CssBaseline />

        <AppBar
          position="absolute"
        >
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex} noWrap>
              Chat Name
            </Typography>

            <div>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);
