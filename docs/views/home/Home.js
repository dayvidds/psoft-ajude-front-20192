import BaseView from '../base-view/BaseView.js';
import { API_URL_CAMPANHA } from '../../util/api-routes.js';
import { getToken } from '../../util/auth.js';
import { URL_CADASTRO, URL_CADASTRO_CAMPANHA } from '../../util/app-routes.js';
import { renderResumoCampanha } from '../campanha/RenderersCampanha.js';

const componentName = 'home-page';

const MAX_CAMPANHAS_DESTAQUE = 5;
const METODO_ORDENACAO_DEFAULT = 'META';

export function renderRadioMetodoOrdenacao() {
  return `
    <h4 style="margin: 0">Metodo de ordenação:</h4>
    <form id="metodo-ordenacao">
      <input type="radio" name="metodo" value="META" id="metodo-meta"> Meta<br>
      <input type="radio" name="metodo" value="DEADLINE" id="metodo-deadline"> Deadline<br>
      <input type="radio" name="metodo" value="LIKES" id="metodo-likes"> Likes 
    </form>
  `;
}

export function renderHome(campanhasDestaque) {
  return `
    <div class="space-between">
      <a href="#${URL_CADASTRO_CAMPANHA}">Cadastrar Campanha</a>
      <a href="#${URL_CADASTRO}">Cadastrar-se</a>
    </div>
    ${renderRadioMetodoOrdenacao()}
    ${campanhasDestaque
      .slice(0, MAX_CAMPANHAS_DESTAQUE)
      .map(renderResumoCampanha)
      .join('')}
  `;
}

export default class Home extends BaseView {
  constructor(props) {
    super(props);

    this.metodoOrdenacao = METODO_ORDENACAO_DEFAULT;
    this.campanhasDestaque = [];
  }

  connectedCallback() {
    fetch(API_URL_CAMPANHA, {
      method: 'GET',
      headers: new Headers({
        Metodo: this.metodoOrdenacao,
        Authorization: `Bearer ${getToken()}`,
      }),
    })
      .then((r) => r.json())
      .then((response) => {
        this.campanhasDestaque = response;
        super.connectedCallback();

        this.querySelector(`#metodo-${this.metodoOrdenacao.toLowerCase()}`).setAttribute('checked', true);

        this.querySelector('#metodo-ordenacao').addEventListener('change', (e) => {
          e.preventDefault();
          this.metodoOrdenacao = e.target.value;
          this.connectedCallback();
        });
      });
  }

  render() {
    return renderHome(this.campanhasDestaque);
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, Home);
