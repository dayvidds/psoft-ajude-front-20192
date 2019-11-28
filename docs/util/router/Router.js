import { URL_ROOT } from '../app-routes.js';

export function redirect(locationTo) {
  location.hash = locationTo.toLowerCase();
}

export default class Router {
  constructor(routes, dinamicRoutes) {
    this.routes = routes;
    this.dinamicRoutes = dinamicRoutes;
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
    const firstRoute = hash.split('/')[1];

    if (hash === '') {
      redirect(URL_ROOT);
    } else if (hash === '#/') {
      return 'root';
    } else if (this.dinamicRoutes.includes(firstRoute)) {
      return firstRoute;
    }
    return hash.substring(2, hash.includes('?') ? hash.indexOf('?') : hash.length);
  }

  notFound() {
    return {
      renderComponent: () => `
        <h1>Not Found</h1>
        <a href="${URL_ROOT}">Voltar para HOME</a>
       `,
    };
  }
}
