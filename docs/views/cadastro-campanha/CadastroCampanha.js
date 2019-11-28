import BaseView from '../base-view/BaseView.js';
import CadastroCampanhaForm from './CadastroCampanhaForm.js';
import { forceAuth } from '../../util/auth.js';

const componentName = 'cadastro-campanha';

export default class CadastroCampanha extends BaseView {
  constructor() {
    super();
    forceAuth();
  }

  render() {
    return `${CadastroCampanhaForm.renderComponent()}`;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, CadastroCampanha);
