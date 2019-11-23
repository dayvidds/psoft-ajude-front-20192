import BaseView from '../base-view/BaseView.js';

const componentName = 'home-page';

export default class Home extends BaseView {
  render() {
    return '';
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, Home);
