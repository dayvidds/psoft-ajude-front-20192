# Projeto de Software

## Detalhes

Projeto da disciplina de Projeto de Software  
Orientadores: **Dr. Dalton Serey** (@daltonserey) e **Dra. Raquel Lopes** (@raquelvl)  
Discentes: **Dayvid Silva** (@dayvidds) e **João Espindula** (@pedroespindula)

> **AJuDE - AquiJUntosDoandoEsperança**  
> O AJuDE é uma plataforma para financiamento coletivo onde as causas mais populares ganham mais visibilidade. Cada projeto (ou campanha) será atendido quando conseguir arrecadar uma quantidade de doações igual ou superior à meta. O sistema permite que usuários classifiquem os projetos e escrevam comentários sobre os mesmos. Os usuários da aplicação criam projetos com suas metas. A partir desse momento o sistema começa a arrecadação e permite classificar, dar like/dislike nos projetos e ainda escrever comentários sobre eles.

## [](https://github.com/dayvidds/psoft-ajude-front-20192/tree/dayvidds-patch-1#explica%C3%A7%C3%A3o)Explicação

[Vídeo de demonstração da aplicação](https://google.com.br/)  
[Aplicação](https://dayvidds.github.io/psoft-ajude-front-20192/#/)

## Arquitetura

O frontend foi implementado a partir de uma arquitetura de rotas, views e componentes. Cada rota tem sua view e uma view é composta por componentes onde cada componente pode ser _Stateful_ (Com estado, uma classe) ou _Stateless_ (Sem estado, função que renderiza o componente através de parâmetros). Essa implemetação foi feita usando WebComponents e sintaxe ES6.

### Ponto de entrada

O ponto de entrada da aplicação está no arquivo `docs/index.html` que faz a importação da estilização (`docs/index.css`) e do script principal `docs/index.js`.

No `docs/index.js` está todo o mapeamento de roteamento do frontend, onde cada rota é ligada a sua view. O `docs/index.js` importa todas as views da aplicação e as relaciona a rota a partir da criação de um objeto que é passado para o _Router_ (Ler próximo ponto para mais detalhes), ou seja, o `docs/index.js` faz apenas a declaração do roteamento.

### Roteamento

Todo o roteamento é administrado pelo _Router_ que fará a partir da URL visitada da aplicação, o mapeamento entre a rota e sua view. Esse _Router_ permite tanto o uso de URLs estáticas ("/login"), como também URLs dinâmicas ("/campanha/<nome-da-campanha>") e assim como URLs com _Query Parameters_ ("/pesquisa/campanha?substring="substring de pesquisa"). Caso a URL não exista, é renderizada uma pagina de NotFound.

### Comunicação

O frontend se comunica com o backend a partir da API `fetch`. Existem requisições base que são usadas em toda a aplicação. Essas requisições estão no arquivo `docs/util/mocked-requests.js`. Além disso, todas as URLs usadas na aplicação, ou são montadas dentro do componente a partir de URLs base importadas ou são as URLs base que são importadas. Essas URLs estão nos arquivos `docs/util/app-routes.js` (URLs do frontend) e `docs/util/api-routes.js` (URLs do backend).

### Autenticação

A autenticação é feita a partir de JWT que é armazenado no localStorage. Esse JWT é gerado a partir da solicitação do login do usuário. Se for bem sucedido, o backend retornará o JWT e o front o armazenará no localStorage em conjunto com seu email. Se não, o frontend mostrará o erro retornado pelo backend.
