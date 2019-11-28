import BaseView from '../base-view/BaseView.js';
import { forceAuth } from '../../util/auth.js';
import { getRequestWithToken } from '../../util/mocked-requests.js';
import { API_URL_USUARIO } from '../../util/api-routes.js';
import { renderUsuario } from './RenderersUsuario.js';
import { getDinamicUrlValue } from '../../util/util.js';

const componentName = 'usuario-view';

export default class Usuario extends BaseView {
  constructor(props) {
    super(props);
    forceAuth();

    this.usuario = {};
  }

  connectedCallback() {
    const urlUsuario = [API_URL_USUARIO, getDinamicUrlValue(2)].join('/');
    getRequestWithToken(urlUsuario)
      .then((r) => r.json())
      .then((usuario) => {
        this.usuario = usuario;
        super.connectedCallback();
      });
  }

  render() {
    return renderUsuario(this.usuario);
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, Usuario);
