import { connect } from 'react-redux';
import ChatCreate from '../components/ChatCreate';
import { createChat } from '../actions/chat';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createChat: title => dispatch(createChat(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatCreate);
