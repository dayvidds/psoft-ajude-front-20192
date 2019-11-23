import AjudeHeader from '../../components/ajude-header/AjudeHeader.js';

const componentName = 'base-view';

export default class BaseView extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.renderBase();
  }

  render() {
    return '';
  }

  renderBase() {
    return `
      ${AjudeHeader.renderComponent()}
      ${this.render()}
    `;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, BaseView);
