import Form from '../../components/Form/Form.js';
import { URL_CADASTRO } from '../../util/routes.js';
import { redirect } from '../../components/Router/Router.js';
import { noAuth } from '../../util/auth.js';

export default class Login extends Form {
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
      redirect('login');
    };

    super(title, actionName, formFields, handleWorking, URL_CADASTRO);
  }

  renderComponent() {
    return '<cadastro-form></cadastro-form>';
  }
}

customElements.define('cadastro-form', Login);
