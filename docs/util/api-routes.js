export const API_URI = 'https://api-ajude.herokuapp.com';

const API_URL = [API_URI].join('/');

export const API_URL_USUARIO = [API_URL, 'usuario'].join('/');
export const API_URL_CAMPANHA = [API_URL, 'campanha'].join('/');
export const API_URL_CAMPANHA_PESQUISA = [API_URL_CAMPANHA, 'pesquisa'].join('/');
export const API_URL_LOGIN = [API_URL, 'autorizacao', 'login'].join('/');

export default API_URL;
