import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appFrame: {
    display: 'flex',
    height: '100vh',
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
            <Typography variant="title" color="inherit" noWrap>
              Chat Name
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);
