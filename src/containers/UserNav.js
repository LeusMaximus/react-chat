import { connect } from 'react-redux';
import UserNav from '../components/UserNav';
import { logout, editProfile } from '../actions/auth';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  editProfile: params => dispatch(editProfile(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserNav);
