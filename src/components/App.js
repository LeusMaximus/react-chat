// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Own modules
import WelcomePage from './WelcomePage';
import ChatPage from './ChatPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/chat" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
