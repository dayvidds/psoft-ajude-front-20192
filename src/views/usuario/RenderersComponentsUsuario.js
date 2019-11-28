import { URL_USUARIO } from '../../util/app-routes.js';

export function renderLinkUsuario(usuario) {
  return `<a href="#${URL_USUARIO}/${usuario.email}">${usuario.primeiroNome} ${usuario.ultimoNome}</a>`;
}

export function renderNomeUsuario(usuario) {
  return `<h2>${renderLinkUsuario(usuario)}</h2>`;
}

export function renderEmailUsuario(usuario) {
  return `<h4>Email: ${usuario.email}</h4>`;
}
