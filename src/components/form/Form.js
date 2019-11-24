import { capitalize, toCammelCase, getFieldValue } from '../../util/util.js';
import { postRequestWithToken } from '../../util/mocked-requests.js';

const componentName = 'base-form';

function formField(name, type) {
  return `
    <label for="${toCammelCase(name)}">${capitalize(name)}</label>
    <input type="${type.toLowerCase()}" placeholder="${capitalize(name)}" id="${toCammelCase(name)}">
  `;
}

export function renderForm(title, formFields, actionName) {
  return `
        <h1>${title}</h1>     
        <form id="${title}">
          <fieldset>
            ${formFields.map((f) => formField(f.name, f.type)).join('')}
            <input class="button-primary" type="submit" value="${actionName}">
          </fieldset>
        </form>
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
        data[cammelCaseName] = getFieldValue(cammelCaseName, e);
      });

      postRequestWithToken(this.url, data)
        .then((r) => r.json())
        .then((response) => {
          if (response.status) {
            alert(response.message);
          } else {
            this.handleWorking(response);
          }
        });
    });
  }

  render() {
    return renderForm(this.title, this.formFields, this.actionName);
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, Form);
