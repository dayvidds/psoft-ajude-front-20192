import BaseComponent from '../base-component/BaseComponent.js';
import { getFieldValue } from '../../util/util.js';
import { redirect } from '../../util/router/Router.js';
import { URL_PESQUISA_CAMPANHA } from '../../util/app-routes.js';

const componentName = 'input-pesquisa-campanha';
const idInput = 'substring-pesquisa';

export default class InputPesquisaCampanha extends BaseComponent {
  render() {
    return `
      <form id="pesquisa-campanha">
        <input type="checkbox" id="ativa" checked/> Ativa <br>
        <input type="checkbox" id="concluida"/> Concluida <br>
        <input type="checkbox" id="vencida"/> Vencida <br>
        <input type="text" placeholder="Pesquisar Campanha" id="${idInput}"/>
        <input type="submit" value="Pesquisar"> 
      </form>
    `;
  }

  connectedCallback() {
    this.querySelector('#pesquisa-campanha').addEventListener('submit', (e) => {
      e.preventDefault();
      const substring = getFieldValue(idInput, e);
      const statusProcurados = [...e.target.querySelectorAll('input[type=checkbox]')].filter((n) => n.checked).map((n) => n.id);
      const query = `?substring=${substring}&status=${statusProcurados}`;
      redirect([URL_PESQUISA_CAMPANHA, query].join(''));
    });
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, InputPesquisaCampanha);
