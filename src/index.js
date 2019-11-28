import Home from './views/home/Home.js';
import Router from './util/router/Router.js';
import CadastroCampanha from './views/cadastro-campanha/CadastroCampanha.js';
import CadastroUsuario from './views/cadastro-usuario/CadastroUsuario.js';
import Login from './views/login/Login.js';
import PesquisaCampanha from './views/pesquisa-campanha/PesquisaCampanha.js';

function routing() {
  const router = new Router(
    {
      root: Home,
      login: Login,
      cadastro: CadastroUsuario,
      cadastro_campanha: CadastroCampanha,
      campanha: Campanha,
      'pesquisa/campanha': PesquisaCampanha,
    },
    ['campanha', 'usuario']
  );

  router.handleHashChange();

  window.onhashchange = () => {
    router.handleHashChange();
  };
}

function main() {
  routing();
}

main();
