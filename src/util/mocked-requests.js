import { getToken } from './auth.js';

export function getRequest(url) {
  return fetch(url);
}

export function postRequest(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
}

export function postRequestWithToken(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    }),
  });
}
