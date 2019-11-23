import LoginForm from './views/login/LoginForm.js';
import CadastroUsuarioForm from './views/cadastro-usuario/CadastroUsuarioForm.js';
import Home from './views/home/Home.js';
import Router from './components/router/Router.js';
import CadastroCampanhaForm from './views/cadastro-campanha/CadastroCampanhaForm.js';

function routing() {
  const router = new Router({
    root: new Home(),
    login: new LoginForm(),
    cadastro: new CadastroUsuarioForm(),
    campanha: new CadastroCampanhaForm(),
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
