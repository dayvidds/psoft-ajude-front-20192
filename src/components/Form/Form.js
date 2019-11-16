import { capitalize, toCammelCase } from '../../util/util.js';
import { postRequest } from '../../util/mocked-requests.js';

function formField(name, type) {
  return `
    <label for="${toCammelCase(name)}">${capitalize(name)}</label>
    <input type="${type.toLowerCase()}" placeholder="${capitalize(name)}" id="${toCammelCase(name)}">
  `;
}

export default class Form extends HTMLElement {
  constructor(title, actionName, formFields, handleWorking, url) {
    super();
    this.title = title;
    this.actionName = actionName;
    this.formFields = formFields;
    this.handleWorking = handleWorking;
    this.url = url;

    this.innerHTML = this.render();
  }

  connectedCallback() {
    document.querySelector(`#${this.title}`).addEventListener('submit', (e) => {
      e.preventDefault();

      const data = {};

      this.formFields.forEach(({ name }) => {
        const cammelCaseName = toCammelCase(name);
        data[cammelCaseName] = this.getFieldValue(cammelCaseName, e);
      });

      postRequest(this.url, data)
        .then((r) => r.json())
        .then((response) => {
          if (response.status === 500) {
            alert(response.message);
          } else {
            this.handleWorking(response);
          }
        });
    });
  }

  getFieldValue(id, e) {
    return e.target.querySelector(`#${id}`).value;
  }

  render() {
    return `
        <h1>${this.title}</h1>     
        <form id="${this.title}">
          <fieldset>
            ${this.formFields.map((f) => formField(f.name, f.type)).join('')}
            <input class="button-primary" type="submit" value="${this.actionName}">
          </fieldset>
        </form>
      `;
  }

  renderComponent() {
    return '<base-form></base-form>';
  }
}

customElements.define('base-form', Form);
