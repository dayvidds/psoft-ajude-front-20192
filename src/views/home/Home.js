import BaseComponent from '../../components/base-component/BaseComponent.js';
import LoginLogoutButton from '../../components/login-logout-button/LoginLogoutButton.js';

const componentName = 'home-page';

export default class Home extends BaseComponent {
  render() {
    return `${LoginLogoutButton.renderComponent()}`;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, Home);
