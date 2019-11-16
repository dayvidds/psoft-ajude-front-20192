import Login from './views/login/login.js';
import Router from './util/Router.js';

function routing() {
  const router = new Router({
    login: new Login(),
  });

  router.handleHashChange();

  window.onhashchange = () => {
    router.handleHashChange();
  };
}

function main() {
  routing();
}

main();
