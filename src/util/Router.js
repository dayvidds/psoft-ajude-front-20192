export function redirect(locationTo) {
  location.hash = locationTo.toLowerCase();
}

export default class Router {
  constructor(routes) {
    this.routes = routes;
  }

  handleHashChange() {
    const app = document.querySelector('#app');

    if (location.hash !== location.hash.toLowerCase()) {
      redirect(location.hash);
    } else {
      const hash = this.treatHash(location.hash);
      const route = hash in this.routes ? this.routes[hash] : this.notFound();
      app.innerHTML = route.renderComponent();
    }
  }

  treatHash(hash) {
    return hash === '' || hash === '#/' ? 'root' : hash.substring(1);
  }

  notFound() {
    return {
      renderComponent: () => '<h1>Not Found</h1>',
    };
  }
}
