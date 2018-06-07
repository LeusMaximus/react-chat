// Own modules
import cachedToken from '../utils/cachedToken';
import makeRequest from '../utils/makeRequest';

// Constants
import * as actTypes from '../constants/auth';

export function signup(username, password) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.signup) {
      return Promise.resolve();
    }

    dispatch({
      type: actTypes.SIGNUP_REQUEST,
    });

    return makeRequest({
      endpoint: '/signup',
      body: {
        username,
        password,
      },
      requestOptions: {
        method: 'POST',
      },
    })
      .then((data) => {
        if (!data.token) {
          throw new Error("Token hasn't provided");
        }

        return data;
      })
      .then((data) => {
        // Caching JWT token
        cachedToken.set(data.token);

        dispatch({
          type: actTypes.SIGNUP_SUCCESS,
          payload: data,
        });
      })
      .catch(error =>
        dispatch({
          type: actTypes.SIGNUP_FAILURE,
          payload: error,
        }));
  };
}

export function login(username, password) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.login) {
      return Promise.resolve();
    }

    dispatch({
      type: actTypes.LOGIN_REQUEST,
    });

    return makeRequest({
      endpoint: '/login',
      body: {
        username,
        password,
      },
      requestOptions: {
        method: 'POST',
      },
    })
      .then((data) => {
        if (!data.token) {
          throw new Error("Token hasn't provided");
        }

        return data;
      })
      .then((data) => {
        // Caching JWT token
        cachedToken.set(data.token);

        dispatch({
          type: actTypes.LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch(error =>
        dispatch({
          type: actTypes.LOGIN_FAILURE,
          payload: error,
        }));
  };
}

export function logout() {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.logout) {
      return Promise.resolve();
    }

    dispatch({
      type: actTypes.LOGOUT_REQUEST,
    });

    return makeRequest({
      endpoint: '/logout',
    })
      .then((data) => {
        // Remove cached JWT token
        cachedToken.remove();

        dispatch({
          type: actTypes.LOGOUT_SUCCESS,
          payload: data,
        });
      })
      .catch(error =>
        dispatch({
          type: actTypes.LOGOUT_FAILURE,
          payload: error,
        }));
  };
}

export function verifyAuth() {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.verifyAuth) {
      return Promise.resolve();
    }

    const { token } = getState().auth;

    if (!token) {
      return dispatch({
        type: actTypes.VERIFY_AUTH_FAILURE,
      });
    }

    return makeRequest({
      endpoint: '/users/me',
      token,
    })
      .then((data) => {
        dispatch({
          type: actTypes.VERIFY_AUTH_SUCCESS,
          payload: data,
        });
      })
      .catch(error =>
        dispatch({
          type: actTypes.VERIFY_AUTH_FAILURE,
          payload: error,
        }));
  };
}

export function editProfile({ username, firstName = '', lastName = '' }) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.editProfile) {
      return Promise.resolve();
    }

    const { token } = getState().auth;

    dispatch({
      type: actTypes.EDIT_PROFILE_REQUEST,
    });

    if (!token) {
      return dispatch({
        type: actTypes.EDIT_PROFILE_FAILURE,
      });
    }

    return makeRequest({
      endpoint: '/users/me',
      token,
      body: {
        data: {
          username,
          firstName,
          lastName,
        },
      },
      requestOptions: {
        method: 'POST',
      },
    })
      .then((data) => {
        dispatch({
          type: actTypes.EDIT_PROFILE_SUCCESS,
          payload: data,
        });
      })
      .catch(error =>
        dispatch({
          type: actTypes.EDIT_PROFILE_FAILURE,
          payload: error,
        }));
  };
}
