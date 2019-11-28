import AjudeHeader from '../../components/ajude-header/AjudeHeader.js';

const componentName = 'base-view';

export default class BaseView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.renderBase();
  }

  render() {
    return '';
  }

  renderBase() {
    return `
      ${AjudeHeader.renderComponent()}
      <section>${this.render()}</section>
    `;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, BaseView);
