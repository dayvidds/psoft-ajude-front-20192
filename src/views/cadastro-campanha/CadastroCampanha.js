import BaseView from '../base-view/BaseView.js';
import CadastroCampanhaForm from './CadastroCampanhaForm.js';

const componentName = 'cadastro-campanha';

export default class CadastroCampanha extends BaseView {
  render() {
    return `${CadastroCampanhaForm.renderComponent()}`;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, CadastroCampanha);
