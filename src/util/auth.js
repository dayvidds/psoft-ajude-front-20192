import { redirect } from '../components/router/Router.js';

const TOKEN_KEY = 'token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function isLoggedIn() {
  return !!getToken();
}

export function noAuth() {
  if (isLoggedIn()) {
    redirect('/');
  }
}

export function forceAuth() {
  if (!isLoggedIn()) {
    redirect('login');
  }
}

export function login(token) {
  localStorage.setItem(TOKEN_KEY, token);
  redirect('/');
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  redirect('/');
  location.reload();
}
