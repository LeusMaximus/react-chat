import * as actTypes from '../constants/auth';

import cachedToken from '../utils/cachedToken';

const token = cachedToken.get();

const initialState = {
  isAuthenticated: Boolean(token),
  user: null,
  token,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actTypes.SIGNUP_SUCCESS:
    case actTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case actTypes.VERIFY_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case actTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      }
    case actTypes.SIGNUP_FAILURE:
    case actTypes.LOGIN_FAILURE:
    case actTypes.VERIFY_AUTH_FAILURE:
    case actTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: '',
      };
    default:
      return state;
  }
}
