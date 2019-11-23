import BaseComponent from '../base-component/BaseComponent';

const componentName = 'ajude-header';

export default class AjudeHeader extends BaseComponent {
  render() {
    return super.render();
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, AjudeHeader);
