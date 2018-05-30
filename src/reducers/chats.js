import { combineReducers } from 'redux';
import * as actTypes from '../constants/chats';

const initialState = {
  activeId: '',
  activeChat: null,
  allIds: [],
  myIds: [],
  byIds: {},
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case actTypes.SET_ACTIVE_CHAT:
    case actTypes.JOIN_CHAT_SUCCESS:
      return action.payload.chat._id;
    case actTypes.UNSET_ACTIVE_CHAT:
      return '';
    default:
      return state;
  }
};

const activeChat = (state = initialState.activeChat, action) => {
  switch (action.type) {
    case actTypes.SET_ACTIVE_CHAT:
      return action.payload.chat;
    case actTypes.UNSET_ACTIVE_CHAT:
      return '';
    default:
      return state;
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case actTypes.GET_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case actTypes.CREATE_CHAT_SUCCESS:
      return [
        ...state,
        action.payload.chat._id,
      ];
    default:
      return state;
  }
};

const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case actTypes.GET_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case actTypes.CREATE_CHAT_SUCCESS:
    case actTypes.JOIN_CHAT_SUCCESS:
      return [
        ...state,
        action.payload.chat._id,
      ];
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case actTypes.GET_ALL_CHATS_SUCCESS:
    case actTypes.GET_MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce((chatsByIds, chat) => ({
          ...chatsByIds,
          [chat._id]: {...chat},
        }), {}),
      };
    case actTypes.CREATE_CHAT_SUCCESS:
    case actTypes.JOIN_CHAT_SUCCESS:
      return {
        ...state,
        [action.payload.chat._id]: {...action.payload.chat}
      };
    default:
      return state;
  }
};

export default combineReducers({
  activeId,
  activeChat,
  allIds,
  myIds,
  byIds,
});

// Selectors
export const getChatId = chat => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);
export const getChat = (state, id) => state.byIds[id];
