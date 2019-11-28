export function renderFormAdicionarLike(liked) {
  const conteudoBotao = liked ? 'Unlike' : 'Like';
  return `
    <button id="like">${conteudoBotao}</button>
  `;
}

export function renderFormComentar() {
  return `
    <form id="comentar" class="inline-form">
        <h4>Comentar</h4>
        <input type="text" placeholder="Comentario" id="conteudo-comentario"/>
        <input type="submit" value="Comentar"/>
    </form>
  `;
}

export function renderFormDoar() {
  return `
    <form id="doar" class="inline-form">
        <h4>Doar</h4>
        <input type="number" placeholder="Valor da doação" id="valor-doacao"/>
        <input type="submit" value="Doar"/>
    </form>
  `;
}
