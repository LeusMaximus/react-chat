import { connect } from 'react-redux';
import ChatCreate from '../components/ChatCreate';
import { chatCreate } from '../actions/chat';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  chatCreate: title => dispatch(chatCreate(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatCreate);
