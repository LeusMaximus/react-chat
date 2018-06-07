/* eslint no-use-before-define: "off" */
import { combineReducers } from 'redux';
import isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import * as actTypes from '../constants';

const initialState = {
  activeId: '',
  allIds: [],
  myIds: [],
  byIds: {},
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case actTypes.SET_ACTIVE_CHAT:
      return action.payload.chat._id;
    case actTypes.UNSET_ACTIVE_CHAT:
    case actTypes.DELETE_CHAT_SUCCESS:
      return '';
    case actTypes.RECIEVE_DELETE_CHAT:
      return state === getChatId(action.payload) ? '' : state;
    default:
      return state;
  }
};


const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case actTypes.GET_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case actTypes.RECIEVE_NEW_CHAT:
      return [
        ...state,
        action.payload.chat._id,
      ];
    case actTypes.DELETE_CHAT_SUCCESS:
    case actTypes.RECIEVE_DELETE_CHAT: {
      const filteredChats = state.filter(id => id !== action.payload.chat._id);

      return filteredChats.length !== state.length ? [...filteredChats] : state;
    }
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
    case actTypes.DELETE_CHAT_SUCCESS:
    case actTypes.LEAVE_CHAT_SUCCESS:
    case actTypes.RECIEVE_DELETE_CHAT: {
      const filteredChats = state.filter(id => id !== action.payload.chat._id);

      return filteredChats.length !== state.length ? [...filteredChats] : state;
    }
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
          [chat._id]: { ...chat },
        }), {}),
      };
    case actTypes.JOIN_CHAT_SUCCESS:
    case actTypes.LEAVE_CHAT_SUCCESS:
    case actTypes.RECIEVE_NEW_CHAT:
      return {
        ...state,
        [action.payload.chat._id]: { ...action.payload.chat },
      };
    case actTypes.DELETE_CHAT_SUCCESS:
    case actTypes.RECIEVE_DELETE_CHAT:
      return _omit(state, action.payload.chat._id);
    default:
      return state;
  }
};

export default combineReducers({
  activeId,
  allIds,
  myIds,
  byIds,
});

// Selectors
export const getChatId = chat => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);
export const getById = (state, id) => state.byIds[id];

export const isMember = (state, chat) => {
  if (!isEmpty(chat)) {
    return chat.members.some(member => member._id === _get(state, 'auth.user._id'));
  }

  return false;
};

export const isCreator = (state, chat) => _get(chat, 'creator._id') === _get(state, 'auth.user._id');

export const isChatMember = (state, chat) => isMember(state, chat) || isCreator(state, chat);
