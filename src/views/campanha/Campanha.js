import BaseView from '../base-view/BaseView.js';
import { deleteRequestWithToken, getRequestWithToken, postRequestWithToken } from '../../util/mocked-requests.js';
import { API_URL_CAMPANHA } from '../../util/api-routes.js';
import { getEmail, forceAuth } from '../../util/auth.js';
import renderCampanha from './RenderersCampanha.js';
import { getDinamicUrlValue, renderListFromFunction } from '../../util/util.js';
import { renderFormAdicionarLike, renderFormComentar, renderFormDoar } from './RenderersFormsCampanha.js';
import { renderComentario, renderDoacao, renderLike } from './RenderersComponentsCampanha.js';

const componentName = 'campanha-view';

function getCampanhaURL() {
  return location.hash.split('/')[2];
}

export default class Campanha extends BaseView {
  constructor(props) {
    super(props);
    forceAuth();

    this.campanha = {};
  }

  render() {
    if (this.campanha !== undefined && this.campanha.message) {
      return `<h2>${this.campanha.message}</h2>`;
    }

    if (Object.entries(this.campanha).length === 0) {
      return '';
    }

    return `
      ${renderCampanha(this.campanha)}
      ${renderListFromFunction(
        'likes',
        this.campanha.likesUsuarios,
        renderLike,
        renderFormAdicionarLike(this.campanha.likesUsuarios.map((e) => e.email).includes(getEmail()))
      )}
      <div class="card">
        <h4>Comentarios</h4>
        ${renderFormComentar()}
        <div id="comentarios-campanha">
        
        </div>
      </div>
      ${renderListFromFunction('doacoes', this.campanha.doacoes, renderDoacao, renderFormDoar())}
    `;
  }

  acao(nomeAcao, data) {
    const urlCampanha = getDinamicUrlValue(2);
    postRequestWithToken([API_URL_CAMPANHA, urlCampanha, nomeAcao].join('/'), data).then((response) => {
      if (!response.ok) {
        alert(response.message);
      } else {
        this.connectedCallback();
      }
    });
  }

  like() {
    this.acao('likes', {});
  }

  comentar() {
    const conteudo = this.querySelector('#conteudo-comentario').value;

    if (conteudo !== '') {
      this.acao('comentario', {
        idComentarioPai: 0,
        conteudo,
      });
    }
  }

  doar() {
    const quantiaDoada = this.querySelector('#valor-doacao').value;

    if (quantiaDoada === '') {
      alert('Digite uma quantia para doar.');
    } else if (parseFloat(quantiaDoada) < 0) {
      alert('A quantia deve ser maior que 0.');
    } else {
      this.acao('doacoes', {
        quantiaDoada,
        dataDoacao: new Date(),
      });
    }
  }

  renderComentarios() {
    const $comentarios = this.querySelector('#comentarios-campanha');
    $comentarios.innerHTML = '';

    this.campanha.comentarios.reverse().forEach((comentario) => {
      const $comentario = document.createElement('p');
      $comentario.innerHTML = renderComentario(comentario);

      if (comentario.donoComentario.email === getEmail()) {
        this.criaBotaoDelete($comentario, comentario);
      }

      $comentarios.appendChild($comentario);
    });
  }

  criaBotaoDelete($comentario, comentario) {
    const urlCampanha = getDinamicUrlValue(2);
    const urlComentarioCampanha = [API_URL_CAMPANHA, urlCampanha, 'comentario'].join('/');
    const $botaoDelete = document.createElement('button');
    $botaoDelete.innerText = 'X';

    $botaoDelete.addEventListener('click', (e) => {
      e.preventDefault();

      deleteRequestWithToken(urlComentarioCampanha, {
        id: comentario.id,
      })
        .then((r) => r.json())
        .then((novosComentarios) => {
          this.campanha.comentarios = novosComentarios;
          this.renderComentarios();
        });
    });

    $comentario.appendChild($botaoDelete);
  }

  connectedCallback() {
    getRequestWithToken([API_URL_CAMPANHA, getCampanhaURL()].join('/'))
      .then((r) => r.json())
      .then((campanha) => {
        this.campanha = campanha;
        this.innerHTML = this.renderBase();

        this.querySelector('#like').addEventListener('click', this.like.bind(this));
        this.querySelector('#comentar').addEventListener('submit', this.comentar.bind(this));
        this.querySelector('#doar').addEventListener('submit', this.doar.bind(this));

        this.renderComentarios();
      });

    super.connectedCallback();
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, Campanha);
