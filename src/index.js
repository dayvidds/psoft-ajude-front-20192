import Login from './views/login/login.js';
import Cadastro from './views/cadastro/cadastro.js';
import Router from './util/Router.js';

function routing() {
  const router = new Router({
    login: new Login(),
    cadastro: new Cadastro(),
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
