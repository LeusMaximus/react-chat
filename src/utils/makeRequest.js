// Vendor modules
import fetch from 'isomorphic-fetch';

// Own modules
import config from '../config';

export default function makeRequest({
  endpoint = '', token = '', body, requestOptions = {},
}) {
  const authHeaders = token
    ? {
      Authorization: `Bearer ${token}`,
    }
    : {};

  return fetch(`${config.API_URI}${endpoint}`, {
    method: 'GET',
    headers: {
      Accept: 'spplication/json',
      'Content-Type': 'application/json',
      ...authHeaders,
    },
    body: JSON.stringify(body),
    ...requestOptions,
  })
    .then(response => response.json())
    .then((data) => {
      if (!data.success) {
        throw new Error(data.message);
      }

      return data;
    });
}
