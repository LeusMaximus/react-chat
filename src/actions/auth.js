// Vendor modules
import fetch from 'isomorphic-fetch';

// Own modules
import config from '../config';
import cachedToken from '../utils/cachedToken';

// Constants
import * as actTypes from '../constants';


export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: actTypes.SIGNUP_REQUEST,
    });

    return fetch(`${config.API_URI}/signup`, {
      method: "POST",
      headers: {
        'Accept': 'spplication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (!data.success) {
          throw new Error(data.message);
        }

        if (!data.token) {
          throw new Error('Token hasn\'t provided');
        }

        return data;
      })
      .then(data => {
        // Caching JWT token
        cachedToken.set(data.token);

        dispatch({
          type: actTypes.SIGNUP_SUCCESS,
          payload: data,
        });
      })
      .catch(error => dispatch({
        type: actTypes.SIGNUP_FAILURE,
        payload: error,
      }));
  }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: actTypes.LOGIN_REQUEST,
    });

    return fetch(`${config.API_URI}/login`, {
      method: "POST",
      headers: {
        'Accept': 'spplication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (!data.success) {
          throw new Error(data.message);
        }

        if (!data.token) {
          throw new Error('Token hasn\'t provided');
        }

        return data;
      })
      .then(data => {
        // Caching JWT token
        cachedToken.set(data.token);

        dispatch({
          type: actTypes.LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch(error => dispatch({
        type: actTypes.LOGIN_FAILURE,
        payload: error,
      }));
  }
}

export function verifyAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    if (!token) {
      return dispatch({
        type: actTypes.VERIFY_AUTH_FAILURE,
      });
    }

    return fetch(`${config.API_URI}/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'spplication/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        if (!data.success) {
          throw new Error(data.message);
        }

        return data;
      })
      .then(data => {
        dispatch({
          type: actTypes.VERIFY_AUTH_SUCCESS,
          payload: data,
        });
      })
      .catch(error => dispatch({
        type: actTypes.VERIFY_AUTH_FAILURE,
        payload: error,
      }));
  }
}
