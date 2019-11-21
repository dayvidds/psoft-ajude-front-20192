import Login from './views/login/login.js';
import Cadastro from './views/cadastro/cadastro.js';
import Home from './views/home/home.js';
import Router from './components/Router/Router.js';
import CadastraCampanha from './views/cadastra-campanha/CadastraCampanha.js';

function routing() {
  const router = new Router({
    root: new Home(),
    login: new Login(),
    cadastro: new Cadastro(),
    campanha: new CadastraCampanha(),
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
