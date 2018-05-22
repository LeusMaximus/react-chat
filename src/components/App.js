// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

// Own modules
import ChatPage from '../containers/ChatPage';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';
import configureStore from '../stores/index';

const store = configureStore();


const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
