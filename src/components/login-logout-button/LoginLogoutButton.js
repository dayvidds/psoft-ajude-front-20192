import BaseComponent from '../base-component/BaseComponent.js';
import { redirect } from '../router/Router.js';
import { isLoggedIn, logout } from '../../util/auth.js';
import { URL_LOGIN } from '../../util/app-routes.js';

export default class LoginLogoutButton extends BaseComponent {
  render() {
    if (isLoggedIn()) {
      return '<button id="logout-button">Logout</button>';
    }
    return '<button id="login-button">Login</button>';
  }

  connectedCallback() {
    if (isLoggedIn()) {
      this.querySelector('#logout-button').addEventListener('click', () => {
        logout();
      });
    } else {
      this.querySelector('#login-button').addEventListener('click', () => {
        redirect(URL_LOGIN);
      });
    }
  }
}

customElements.define('login-logout-button', LoginLogoutButton);
