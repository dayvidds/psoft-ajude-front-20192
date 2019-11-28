import BaseView from '../base-view/BaseView.js';
import ListaCampanhas from './ListaCampanhas.js';
import { forceAuth } from '../../util/auth.js';

const componentName = 'pesquisa-campanha';

export default class PesquisaCampanha extends BaseView {
  constructor() {
    super();
    forceAuth();
  }

  render() {
    return `${ListaCampanhas.renderComponent()}`;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, PesquisaCampanha);
