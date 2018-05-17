// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

// Own modules
import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';


const App = () => (
  <React.Fragment>
    <CssBaseline />

    <Router>
      <Switch>
        <Route exact path="/(login)?" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
