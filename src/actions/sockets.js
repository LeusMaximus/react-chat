// SocketIO
import SocketIOClient from 'socket.io-client';

// Constants
import * as actTypes from '../constants/sockets';

import config from '../config';
import { redirect } from './services';

let socket = null;

export function missingSocketConnection() {
  return {
    type: actTypes.SOCKETS_MISSING_CONNECTION,
  }
}

export function socketsConnect() {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.socketsConnect) {
      return Promise.resolve();
    }

    const { token } = getState().auth;

    dispatch({
      type: actTypes.SOCKETS_CONNECTION_REQUEST,
    });

    socket = SocketIOClient(config.API_WS, {
      query: { token },
    });

    socket.on('connect', () => {
      dispatch({
        type: actTypes.SOCKETS_CONNECTION_SUCCESS,
      });
    });

    socket.on('error', (error) => {
      dispatch({
        type: actTypes.SOCKETS_CONNECTION_FAILURE,
        payload: error,
      });
    });

    socket.on('connect_error', () => {
      dispatch({
        type: actTypes.SOCKETS_CONNECTION_FAILURE,
      });
    });

    socket.on('new-message', (message, ...rest) => {
      dispatch({
        type: actTypes.RECIEVE_MESSAGE,
        payload: message,
      });
    });

    socket.on('new-chat', ({ chat }) => {
      dispatch({
        type: actTypes.RECIEVE_NEW_CHAT,
        payload: { chat },
      });
    });

    socket.on('deleted-chat', ({ chat }) => {
      const { activeId } = getState().chats;

      dispatch({
        type: actTypes.RECIEVE_DELETE_CHAT,
        payload: { chat },
      });

      if (activeId === chat._id) {
        dispatch(redirect('/chat'));
      }
    });
  }
}

export function sendMessage(content) {
  return (dispatch, getState) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    const { activeId } = getState().chats;

    socket.emit('send-message', {
      chatId: activeId,
      content,
    }, () => {
      dispatch({
        type: actTypes.SEND_MESSAGE,
        payload: {
          chatId: activeId,
          content,
        }
      });
    });
  };
}

export function mountChat(chatId) {
  return (dispatch, getState) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('mount-chat', chatId);

    dispatch({
      type: actTypes.MOUNT_CHAT,
      payload: { chatId }
    })
  };
}

export function unmountChat(chatId) {
  return (dispatch, getState) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('unmount-chat', chatId);

    dispatch({
      type: actTypes.UNMOUNT_CHAT,
      payload: { chatId }
    })
  };
}

