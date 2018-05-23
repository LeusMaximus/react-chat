// Vendor modules
import fetch from 'isomorphic-fetch';

// Own modules
import config from '../config';
import cachedToken from '../utils/cachedToken';

// Constants
import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
} from '../constants';


export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
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
          type: SIGNUP_SUCCESS,
          payload: data,
        });
      })
      .catch(error => dispatch({
        type: SIGNUP_FAILURE,
        payload: error,
      }));
  }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
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
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch(error => dispatch({
        type: LOGIN_FAILURE,
        payload: error,
      }));
  }
}
