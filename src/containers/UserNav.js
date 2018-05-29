import { connect } from 'react-redux';
import UserNav from '../components/UserNav';
import { logout } from '../actions/auth';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserNav);
