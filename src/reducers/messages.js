import * as actTypes from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actTypes.SET_ACTIVE_CHAT:
      return action.payload.chat.messages;
    case actTypes.RECIEVE_MESSAGE:
      return [
        ...state,
        action.payload.message,
      ];
    default:
      return state;
  }
};
