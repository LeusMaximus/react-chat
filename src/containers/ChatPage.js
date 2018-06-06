import { connect } from 'react-redux';
import ChatPage from '../components/ChatPage';
import { getAllChats, getMyChats, setActiveChat, joinChat, leaveChat, deleteChat } from '../actions/chat';
import { sendMessage, mountChat, unmountChat, socketsConnect } from '../actions/sockets';
import * as fromChats from '../reducers/chats';

const mapStateToProps = state => {
  const stateChats = state.chats;
  const userId = state.auth.user && state.auth.user._id;
  const activeChat = fromChats.getById(state.chats, state.chats.activeId);

  return {
    allChats: fromChats.getByIds(stateChats, stateChats.allIds),
    myChats: fromChats.getByIds(stateChats, stateChats.myIds),
    activeChat,
    activeId: stateChats.activeId,
    isMember: fromChats.isMember(state, activeChat),
    isCreator: fromChats.isCreator(state, activeChat),
    isChatMember: fromChats.isChatMember(state, activeChat),
    userId,
    messages: state.messages,
  }
};

const mapDispatchToProps = dispatch => ({
  getAllChats: () => dispatch(getAllChats()),
  getMyChats: () => dispatch(getMyChats()),
  setActiveChat: (chatId, isNeedRedirect) => dispatch(setActiveChat(chatId, isNeedRedirect)),
  joinChat: chatId => dispatch(joinChat(chatId)),
  leaveChat: chatId => dispatch(leaveChat(chatId)),
  deleteChat: chatId => dispatch(deleteChat(chatId)),
  sendMessage: chatId => dispatch(sendMessage(chatId)),
  mountChat: chatId => dispatch(mountChat(chatId)),
  unmountChat: chatId => dispatch(unmountChat(chatId)),
  socketsConnect: () => dispatch(socketsConnect()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
