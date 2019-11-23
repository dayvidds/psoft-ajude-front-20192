import Form from '../../components/form/Form.js';
import { API_URL_CAMPANHA } from '../../util/api-routes.js';

const componentName = 'cadastra-campanha-form';

export default class CadastroCampanhaForm extends Form {
  constructor() {
    const title = 'Cadastrar Campanha';
    const actionName = 'Cadastrar Campanha';
    const formFields = [
      { name: 'Nome Curto', type: 'text' },
      { name: 'Descricao', type: 'text' },
      { name: 'Deadline', type: 'date' },
      { name: 'Meta', type: 'number' },
    ];
    const handleWorking = () => {
      alert('Campanha criada com sucesso!');
    };

    super(title, actionName, formFields, handleWorking, API_URL_CAMPANHA);
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, CadastroCampanhaForm);
