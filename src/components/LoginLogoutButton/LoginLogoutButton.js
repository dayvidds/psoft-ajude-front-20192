import BaseComponent from '../BaseComponent/BaseComponent.js';
import { redirect } from '../../util/Router.js';
import { isLoggedIn, logout } from '../../util/auth.js';

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
        redirect('login');
      });
    }
  }
}

customElements.define('login-logout-button', LoginLogoutButton);
