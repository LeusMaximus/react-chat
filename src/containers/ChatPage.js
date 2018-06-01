import { connect } from 'react-redux';
import ChatPage from '../components/ChatPage';
import { getAllChats, getMyChats, setActiveChat, joinChat, leaveChat, deleteChat } from '../actions/chat';
import * as fromChats from '../reducers/chats';

const mapStateToProps = state => {
  const stateChats = state.chats;
  const userId = state.auth.user && state.auth.user._id;

  return {
    allChats: fromChats.getByIds(stateChats, stateChats.allIds),
    myChats: fromChats.getByIds(stateChats, stateChats.myIds),
    activeChat: stateChats.activeChat,
    activeId: stateChats.activeId,
    isMember: fromChats.isMember(stateChats, userId),
    isCreator: fromChats.isCreator(stateChats, userId),
    isChatMember: fromChats.isChatMember(stateChats, userId),
  }
};

const mapDispatchToProps = dispatch => ({
  getAllChats: () => dispatch(getAllChats()),
  getMyChats: () => dispatch(getMyChats()),
  setActiveChat: chatId => dispatch(setActiveChat(chatId)),
  joinChat: chatId => dispatch(joinChat(chatId)),
  leaveChat: chatId => dispatch(leaveChat(chatId)),
  deleteChat: chatId => dispatch(deleteChat(chatId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
