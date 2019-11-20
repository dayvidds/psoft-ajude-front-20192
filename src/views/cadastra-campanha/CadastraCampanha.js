import Form from '../../components/Form/Form.js';

export default class CadastraCampanha extends Form {
  constructor() {
    const title = 'Campanha';
    const actionName = 'Cadastrar Campanha';
    const formFields = [
      { name: 'Nome Curto', type: 'text' },
      { name: 'Descricao', type: 'text' },
      { name: 'Deadline', type: 'date' },
      { name: 'Meta', type: 'number' },
    ];
    const handleWorking = () => {
      alert('Deu certo');
    };

    super(title, actionName, formFields, handleWorking, '');
  }

  renderComponent() {
    return '<cadastra-campanha-form></cadastra-campanha-form>';
  }
}

customElements.define('cadastra-campanha-form', CadastraCampanha);
