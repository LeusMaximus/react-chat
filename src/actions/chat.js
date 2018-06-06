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

export function setActiveChat (chatId, isNeedRedirect) {
  return (dispatch) => {
    return dispatch(getChat(chatId))
      .then(data => {
        if (!data || !data.chat) {
          dispatch(redirect('/chat'));

          return dispatch({
            type: actTypes.UNSET_ACTIVE_CHAT,
          });
        }

        dispatch({
          type: actTypes.SET_ACTIVE_CHAT,
          payload: data,
        });

        if (isNeedRedirect) {
          dispatch(redirect(`/chat/${data.chat._id}`));
        }

        return data;
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

        dispatch(setActiveChat(data.chat._id, true));

        return data;
      })
      .catch(error => dispatch({
        type: actTypes.CREATE_CHAT_FAILURE,
        payload: error,
      }));
  };
}

export function deleteChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: actTypes.DELETE_CHAT_REQUEST,
    });

    return makeRequest({
      endpoint: `/chats/${chatId}`,
      token,
      requestOptions: {
        method: 'DELETE',
      }
    })
      .then(data => {
        dispatch({
          type: actTypes.DELETE_CHAT_SUCCESS,
          payload: data,
        });

        dispatch(redirect('/chat'));

        return data;
      })
      .catch(error => dispatch({
        type: actTypes.DELETE_CHAT_FAILURE,
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

export function leaveChat(id) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: actTypes.LEAVE_CHAT_REQUEST,
    });

    return makeRequest({
      endpoint: `/chats/${id}/leave`,
      token,
    })
      .then(data => {
        dispatch({
          type: actTypes.LEAVE_CHAT_SUCCESS,
          payload: data,
        });

        return data;
      })
      .catch(error => dispatch({
        type: actTypes.LEAVE_CHAT_FAILURE,
        payload: error,
      }));
  };
}
