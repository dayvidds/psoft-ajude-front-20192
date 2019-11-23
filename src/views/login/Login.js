import BaseView from '../base-view/BaseView.js';
import LoginForm from './LoginForm.js';

const componentName = 'login-view';

export default class Login extends BaseView {
  render() {
    return `${LoginForm.renderComponent()}`;
  }

  static renderComponent() {
    return `<${componentName}></${componentName}>`;
  }
}

customElements.define(componentName, Login);
