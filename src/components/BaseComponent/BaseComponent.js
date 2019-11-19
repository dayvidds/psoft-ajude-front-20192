export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  render() {
    return '<h1>This is a empty component</h1>';
  }
}
