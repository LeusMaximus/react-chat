import { connect } from 'react-redux';
import SignupPage from '../components/SignupPage';
import { signup } from '../actions/auth';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => ({
  signup: (username, password) => dispatch(signup(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupPage);
