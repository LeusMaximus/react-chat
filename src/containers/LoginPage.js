import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { login } from '../actions';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
