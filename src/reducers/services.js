import { combineReducers } from 'redux';

import * as actTypes from '../constants';

const initialState = {
  isFetching: {
    signup: false,
    login: false,
    logout: false,
    verifyAuth: false,
    editprofile: false,
    allChats: false,
    myChats: false,
    chat: false,
    createChat: false,
    deleteChat: false,
    joinChat: false,
    leaveChat: false,
    sockets: false,
  },

  errors: {
    auth: null,
    chat: null,
  },
};

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case actTypes.SIGNUP_REQUEST:
      return { ...state, signup: true }
    case actTypes.LOGIN_REQUEST:
      return { ...state, login: true }
    case actTypes.LOGOUT_REQUEST:
      return { ...state, logout: true }
    case actTypes.VERIFY_AUTH_REQUEST:
      return { ...state, verifyAuth: true }
    case actTypes.EDIT_PROFILE_REQUEST:
      return { ...state, editprofile: true }
    case actTypes.GET_ALL_CHATS_REQUEST:
      return { ...state, allChats: true }
    case actTypes.GET_MY_CHATS_REQUEST:
      return { ...state, myChats: true }
    case actTypes.GET_CHAT_REQUEST:
      return { ...state, chat: true }
    case actTypes.CREATE_CHAT_REQUEST:
      return { ...state, createChat: true }
    case actTypes.DELETE_CHAT_REQUEST:
      return { ...state, deleteChat: true }
    case actTypes.JOIN_CHAT_REQUEST:
      return { ...state, joinChat: true }
    case actTypes.LEAVE_CHAT_REQUEST:
      return { ...state, leaveChat: true }
    case actTypes.SOCKETS_CONNECTION_REQUEST:
      return { ...state, sockets: true }

    case actTypes.SIGNUP_SUCCESS:
    case actTypes.SIGNUP_FAILURE:
      return { ...state, signup: false }
    case actTypes.LOGIN_SUCCESS:
    case actTypes.LOGIN_FAILURE:
      return { ...state, login: false }
    case actTypes.LOGOUT_SUCCESS:
    case actTypes.LOGOUT_FAILURE:
      return { ...state, logout: false }
    case actTypes.VERIFY_AUTH_SUCCESS:
    case actTypes.VERIFY_AUTH_FAILURE:
      return { ...state, verifyAuth: false }
    case actTypes.EDIT_PROFILE_SUCCESS:
    case actTypes.EDIT_PROFILE_FAILURE:
      return { ...state, editprofile: false }
    case actTypes.GET_ALL_CHATS_SUCCESS:
    case actTypes.GET_ALL_CHATS_FAILURE:
      return { ...state, allChats: false }
    case actTypes.GET_MY_CHATS_SUCCESS:
    case actTypes.GET_MY_CHATS_FAILURE:
      return { ...state, myChats: false }
    case actTypes.GET_CHAT_SUCCESS:
    case actTypes.GET_CHAT_FAILURE:
      return { ...state, chat: false }
    case actTypes.CREATE_CHAT_SUCCESS:
    case actTypes.CREATE_CHAT_FAILURE:
      return { ...state, createChat: false }
    case actTypes.DELETE_CHAT_SUCCESS:
    case actTypes.DELETE_CHAT_FAILURE:
      return { ...state, deleteChat: false }
    case actTypes.JOIN_CHAT_SUCCESS:
    case actTypes.JOIN_CHAT_FAILURE:
      return { ...state, joinChat: false }
    case actTypes.LEAVE_CHAT_SUCCESS:
    case actTypes.LEAVE_CHAT_FAILURE:
      return { ...state, leaveChat: false }
    case actTypes.SOCKETS_CONNECTION_SUCCESS:
    case actTypes.SOCKETS_CONNECTION_FAILURE:
      return { ...state, sockets: false }

    default:
      return state;
  }
}

export const errors = (state = initialState.errors, action) => {
  switch (action.type) {
    case actTypes.SIGNUP_FAILURE:
    case actTypes.LOGIN_FAILURE:
    case actTypes.LOGOUT_FAILURE:
      return {...state, auth: action.payload }

    case actTypes.SIGNUP_SUCCESS:
    case actTypes.LOGIN_SUCCESS:
    case actTypes.LOGOUT_SUCCESS:
      return { ...state, auth: null }

    case actTypes.EDIT_PROFILE_FAILURE:
    case actTypes.GET_ALL_CHATS_FAILURE:
    case actTypes.GET_MY_CHATS_FAILURE:
    case actTypes.GET_CHAT_FAILURE:
    case actTypes.CREATE_CHAT_FAILURE:
    case actTypes.DELETE_CHAT_FAILURE:
    case actTypes.JOIN_CHAT_FAILURE:
    case actTypes.LEAVE_CHAT_FAILURE:
    case actTypes.SOCKETS_CONNECTION_FAILURE:
      return { ...state, chat: action.payload }

    case actTypes.EDIT_PROFILE_SUCCESS:
    case actTypes.EDIT_PROFILE_REQUEST:
    case actTypes.GET_ALL_CHATS_SUCCESS:
    case actTypes.GET_MY_CHATS_SUCCESS:
    case actTypes.GET_CHAT_SUCCESS:
    case actTypes.CREATE_CHAT_SUCCESS:
    case actTypes.DELETE_CHAT_SUCCESS:
    case actTypes.JOIN_CHAT_SUCCESS:
    case actTypes.LEAVE_CHAT_SUCCESS:
    case actTypes.SOCKETS_CONNECTION_SUCCESS:
      return { ...state, chat: null }

    default:
      return state;
  }
}

export default combineReducers({
  isFetching,
  errors,
});
