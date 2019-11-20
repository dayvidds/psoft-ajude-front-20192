import { redirect } from '../components/Router/Router.js';

export function isLoggedIn() {
  return localStorage.getItem('token');
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
  localStorage.setItem('token', token);
  redirect('/');
}

export function logout() {
  localStorage.removeItem('token');
  redirect('/');
  location.reload();
}
