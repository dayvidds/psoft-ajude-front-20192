import BaseComponent from '../base-component/BaseComponent.js';
import LoginLogoutButton from '../login-logout-button/LoginLogoutButton.js';

const componentName = 'ajude-header';

export default class AjudeHeader extends BaseComponent {
  render() {
    return `
      ${LoginLogoutButton.renderComponent()}
    `;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, AjudeHeader);
