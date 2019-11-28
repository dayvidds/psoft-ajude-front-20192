import BaseView from '../base-view/BaseView.js';
import CadastroUsuarioForm from './CadastroUsuarioForm.js';

const componentName = 'cadastro-usuario';

export default class CadastroUsuario extends BaseView {
  render() {
    return `${CadastroUsuarioForm.renderComponent()}`;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, CadastroUsuario);
