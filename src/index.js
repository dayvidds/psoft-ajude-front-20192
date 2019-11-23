import LoginForm from './views/login/LoginForm.js';
import CadastroUsuarioForm from './views/cadastro-usuario/CadastroUsuarioForm.js';
import Home from './views/home/Home.js';
import Router from './util/router/Router.js';
import CadastroCampanhaForm from './views/cadastro-campanha/CadastroCampanhaForm.js';

function routing() {
  const router = new Router({
    root: Home,
    login: LoginForm,
    cadastro: CadastroUsuarioForm,
    campanha: CadastroCampanhaForm,
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
