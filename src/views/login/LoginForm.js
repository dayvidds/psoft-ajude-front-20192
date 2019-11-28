import Form from '../../components/form/Form.js';
import { login, noAuth } from '../../util/auth.js';
import { API_URL_LOGIN } from '../../util/api-routes.js';
import { URL_CADASTRO } from '../../util/app-routes.js';
import { getFieldValue } from '../../util/util.js';

const componentName = 'login-form';

export default class LoginForm extends Form {
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
        login(response.token, getFieldValue('email', { target: this }));
      }
    };

    super(title, actionName, formFields, handleWorking, API_URL_LOGIN);
  }

  render() {
    return `
      <a href="#${URL_CADASTRO}">Cadastro</a>
      ${super.render()}
    `;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, LoginForm);
