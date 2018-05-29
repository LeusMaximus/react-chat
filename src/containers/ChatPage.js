import { connect } from 'react-redux';
import ChatPage from '../components/ChatPage';
import { getAllChats, getMyChats, setActiveChat } from '../actions/chat';
import * as fromChats from '../reducers/chats';

const mapStateToProps = state => ({
  allChats: fromChats.getByIds(state.chats, state.chats.allIds),
  myChats: fromChats.getByIds(state.chats, state.chats.myIds),
});

const mapDispatchToProps = dispatch => ({
  getAllChats: () => dispatch(getAllChats()),
  getMyChats: () => dispatch(getMyChats()),
  setActiveChat: () => dispatch(setActiveChat()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
