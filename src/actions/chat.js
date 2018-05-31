// Own modules
import makeRequest from '../utils/makeRequest';
import { redirect } from './services';

// Constants
import * as actTypes from '../constants/chats';

export function getMyChats () {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: actTypes.GET_MY_CHATS_REQUEST
    });

    return makeRequest({
      endpoint: '/chats/my',
      token,
    })
      .then(data => dispatch({
        type: actTypes.GET_MY_CHATS_SUCCESS,
        payload: data,
      }))
      .catch(error => dispatch({
        type: actTypes.GET_MY_CHATS_FAILURE,
        payload: error,
      }));
  };
}

export function getAllChats () {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: actTypes.GET_ALL_CHATS_REQUEST
    });

    return makeRequest({
      endpoint: '/chats',
      token,
    })
      .then(data => dispatch({
        type: actTypes.GET_ALL_CHATS_SUCCESS,
        payload: data,
      }))
      .catch(error => dispatch({
        type: actTypes.GET_ALL_CHATS_FAILURE,
        payload: error,
      }));
  };
}

export function getChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: actTypes.GET_CHAT_REQUEST,
    });

    return makeRequest({
      endpoint: `/chats/${chatId}`,
      token,
    })
      .then(data => {
        dispatch({
          type: actTypes.GET_CHAT_SUCCESS,
          payload: data,
        });

        return data;
      })
      .catch(error => dispatch({
        type: actTypes.GET_CHAT_FAILURE,
        payload: error,
      }));
  };
}

export function setActiveChat (chatId) {
  return (dispatch) => {
    return dispatch(getChat(chatId))
      .then(data => {
        if (!data) {
          dispatch(redirect('/chat'));

          return dispatch({
            type: actTypes.UNSET_ACTIVE_CHAT,
          });
        }

        return dispatch({
          type: actTypes.SET_ACTIVE_CHAT,
          payload: data,
        });
      });
  };
}

export function chatCreate(title) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: actTypes.CREATE_CHAT_REQUEST,
    });

    return makeRequest({
      endpoint: `/chats`,
      token,
      body: {
        data: {
          title,
        }
      },
      requestOptions: {
        method: 'POST',
      }
    })
      .then(data => {
        dispatch({
          type: actTypes.CREATE_CHAT_SUCCESS,
          payload: data,
        });

        return dispatch(setActiveChat(data.chat._id));
      })
      .catch(error => dispatch({
        type: actTypes.CREATE_CHAT_FAILURE,
        payload: error,
      }));
  };
}

export function joinChat(id) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: actTypes.JOIN_CHAT_REQUEST,
    });

    return makeRequest({
      endpoint: `/chats/${id}/join`,
      token,
    })
      .then(data => {
        dispatch({
          type: actTypes.JOIN_CHAT_SUCCESS,
          payload: data,
        });

        return data;
      })
      .catch(error => dispatch({
        type: actTypes.JOIN_CHAT_FAILURE,
        payload: error,
      }));
  };
}

