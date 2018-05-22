import { connect } from 'react-redux';
import SignupPage from '../components/SignupPage';
import { signup } from '../actions';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  signup: (username, password) => dispatch(signup(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
