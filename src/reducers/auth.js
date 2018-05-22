import {
  SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_SUCCESS, LOGIN_FAILURE,
} from '../constants/index';

import cachedToken from '../utils/cachedToken';

const token = cachedToken.get();

const initialState = {
  isAuthenticated: Boolean(token),
  user: null,
  token,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: '',
      }
    default:
      return state;
  }
}
