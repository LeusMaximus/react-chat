import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { verifyAuth } from '../actions/auth';

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.props.verifyAuth();
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => (
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
      )}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  verifyAuth: () => dispatch(verifyAuth()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute));
