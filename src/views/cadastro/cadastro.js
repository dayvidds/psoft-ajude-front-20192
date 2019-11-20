import Form from '../../components/Form/Form.js';
import { API_URL_USUARIO } from '../../util/api-routes.js';
import { URL_LOGIN } from '../../util/app-routes.js';
import { redirect } from '../../components/Router/Router.js';
import { noAuth } from '../../util/auth.js';

export default class Cadastro extends Form {
  constructor() {
    noAuth();

    const title = 'Cadastro';
    const actionName = 'Cadastrar';
    const formFields = [
      { name: 'Email', type: 'email' },
      { name: 'Senha', type: 'password' },
      { name: 'Primeiro nome', type: 'text' },
      { name: 'Ultimo nome', type: 'text' },
      { name: 'Numero do cartao', type: 'text' },
    ];
    const handleWorking = () => {
      alert('Usuario criado com sucesso!');
      redirect(URL_LOGIN);
    };

    super(title, actionName, formFields, handleWorking, API_URL_USUARIO);
  }

  render() {
    return `
      <a href="#${URL_LOGIN}">Login</a>
      ${super.render()}
    `;
  }

  renderComponent() {
    return '<cadastro-form></cadastro-form>';
  }
}

customElements.define('cadastro-form', Cadastro);
