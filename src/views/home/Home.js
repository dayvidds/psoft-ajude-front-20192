import BaseComponent from '../../components/base-component/BaseComponent.js';
// eslint-disable-next-line no-unused-vars
import LoginLogoutButton from '../../components/login-logout-button/LoginLogoutButton.js';

export default class Home extends BaseComponent {
  render() {
    return '<login-logout-button></login-logout-button>';
  }

  renderComponent() {
    return '<home-page></home-page>';
  }
}

customElements.define('home-page', Home);
