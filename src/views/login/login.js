import Form from '../../components/Form/Form.js';
import { login, noAuth } from '../../util/auth.js';
import { API_URL_LOGIN } from '../../util/api-routes.js';
import { URL_CADASTRO } from '../../util/app-routes.js';

export default class Login extends Form {
  constructor() {
    noAuth();

    const title = 'Login';
    const actionName = 'Login';
    const formFields = [
      { name: 'Email', type: 'email' },
      { name: 'Senha', type: 'password' },
    ];
    const handleWorking = (response) => {
      if (response.token) {
        login(response.token);
      }
    };

    super(title, actionName, formFields, handleWorking, API_URL_LOGIN);
  }

  renderComponent() {
    return '<login-form></login-form>';
  }
}

customElements.define('login-form', Login);
