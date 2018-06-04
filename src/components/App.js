// React
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

// Own modules
import ChatPage from '../containers/ChatPage';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';
import PrivateRoute from '../containers/PrivateRoute';
import configureStore from '../stores';
import history from '../utils/history';

const store = configureStore();


const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />

      <Router history={history}>
        <Switch>
          <Route exact path="/(login)?" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  </Provider>
);

export default App;
