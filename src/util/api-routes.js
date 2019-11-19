export const API_URI = 'http://localhost:8080';

const API_URL = [API_URI, 'api', 'v1'].join('/');

export const API_URL_USUARIO = [API_URL, 'usuario'].join('/');
export const API_URL_LOGIN = [API_URL, 'autorizacao', 'login'].join('/');

export default API_URL;
