import BaseComponent from '../base-component/BaseComponent.js';
import LoginLogoutButton from '../login-logout-button/LoginLogoutButton.js';
import InputPesquisaCampanha from '../input-pesquisa-campanha/InputPesquisaCampanha.js';

const componentName = 'ajude-header';

export default class AjudeHeader extends BaseComponent {
  render() {
    return `
      <h1><a href="#/">AJuDE</a></h1>
      ${InputPesquisaCampanha.renderComponent()}
      ${LoginLogoutButton.renderComponent()}
    `;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, AjudeHeader);
