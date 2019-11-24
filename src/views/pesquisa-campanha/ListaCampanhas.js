import { getUrlParameter } from '../../util/util.js';
import { API_URL_CAMPANHA_PESQUISA } from '../../util/api-routes.js';
import { postRequestWithToken } from '../../util/mocked-requests.js';
import { URL_CAMPANHA } from '../../util/app-routes.js';

const componentName = 'lista-campanhas';

function renderCampanha(campanha) {
  const urlCampanha = [URL_CAMPANHA, campanha.id].join('/');
  return `<li><a href="${urlCampanha}">${campanha.nomeCurto}</a></li>`;
}

export default class ListaCampanhas extends HTMLElement {
  constructor() {
    super();
    this.campanhas = [];

    this.getCampanhas();
  }

  getCampanhas() {
    const parametro = getUrlParameter('substring');
    const statusProcurados = getUrlParameter('status')
      .split(',')
      .map((s) => s.toUpperCase());

    postRequestWithToken(API_URL_CAMPANHA_PESQUISA, {
      parametro,
      statusProcurados,
    })
      .then((r) => r.json())
      .then((response) => {
        this.campanhas = response;
        this.innerHTML = this.render();
      });
  }

  render() {
    return `
      <h2>Campanhas encontradas</h2>
      <ul>
        ${
  this.campanhas.length === 0
    ? 'Nenhuma campanha encontrada'
    : this.campanhas.map(renderCampanha).join('')
}
      </ul>
    `;
  }

  static renderComponent() {
    return `<${componentName} ></${componentName}>`;
  }
}

customElements.define(componentName, ListaCampanhas);
