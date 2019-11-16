import Form from '../../components/Form/Form.js';
import { URL_LOGIN } from '../../util/routes.js';

export default class Login extends Form {
  constructor() {
    const title = 'Login';
    const actionName = 'Login';
    const formFields = [
      { name: 'Email', type: 'email' },
      { name: 'Senha', type: 'password' },
    ];
    const handleWorking = (response) => {
      if (response.token) {
        window.token = response.token;
      }
    };

    super(title, actionName, formFields, handleWorking, URL_LOGIN);
  }

  renderComponent() {
    return '<login-form></login-form>';
  }
}

customElements.define('login-form', Login);
