import { renderLinkCampanha } from '../campanha/RenderersComponentsCampanha.js';
import { renderEmailUsuario, renderNomeUsuario } from './RenderersComponentsUsuario.js';

export function renderCampanhasUsuario(usuario) {
  return `
    <label>Campanhas dono: </label>
    <ul>
      ${usuario.campanhasDono.map((c) => `<li>${renderLinkCampanha(c.nomeCurto, c.id)}</li>`).join('')}
    </ul>
    <label>Campanhas que doou: </label>
    <ul>
      ${usuario.campanhasDoacao.map((c) => `<li>${renderLinkCampanha(c.nomeCurto, c.id)}</li>`).join('')}
    </ul>

  `;
}

export function renderUsuario(usuario) {
  return `
    <div class="card">
      ${renderNomeUsuario(usuario)}
      ${renderEmailUsuario(usuario)}
      ${renderCampanhasUsuario(usuario)}
    </div>
  `;
}
