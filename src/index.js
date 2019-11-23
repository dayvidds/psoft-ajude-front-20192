import Home from './views/home/Home.js';
import Router from './util/router/Router.js';
import CadastroCampanha from './views/cadastro-campanha/CadastroCampanha.js';
import CadastroUsuario from './views/cadastro-usuario/CadastroUsuario.js';
import Login from './views/login/Login.js';

function routing() {
  const router = new Router({
    root: Home,
    login: Login,
    cadastro: CadastroUsuario,
    campanha: CadastroCampanha,
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
