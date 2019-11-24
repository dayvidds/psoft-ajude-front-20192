import { redirect } from './router/Router.js';
import { URL_LOGIN, URL_ROOT } from './app-routes.js';

const TOKEN_KEY = 'token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function isLoggedIn() {
  return !!getToken();
}

export function noAuth() {
  if (isLoggedIn()) {
    redirect(URL_ROOT);
  }
}

export function forceAuth() {
  if (!isLoggedIn()) {
    redirect(URL_LOGIN);
  }
}

export function login(token) {
  localStorage.setItem(TOKEN_KEY, token);
  redirect(URL_ROOT);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  redirect(URL_ROOT);
  location.reload();
}
