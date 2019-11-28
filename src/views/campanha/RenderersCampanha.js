import {
  renderDeadline,
  renderDescricao,
  renderMeta,
  renderNomeCampanha,
  renderQuantiaFaltante,
  renderUsuarioDono,
} from './RenderersComponentsCampanha.js';

export function renderResumoCampanha(campanha) {
  return `
      <div class="card">
        ${renderNomeCampanha(campanha.nomeCurto, campanha.id)}
        ${renderDeadline(campanha.deadline)}
        ${renderQuantiaFaltante(campanha.meta, campanha.doacoes)}
        ${renderUsuarioDono(campanha.usuarioDono)}
      </div>
    `;
}

export default function renderCampanha(campanha) {
  return `
    <div class="card">
      ${renderNomeCampanha(campanha.nomeCurto, campanha.id)}
      ${renderDescricao(campanha.descricao)}
      ${renderDeadline(campanha.deadline)}
      ${renderMeta(campanha.meta)}
      ${renderUsuarioDono(campanha.usuarioDono)}
    </div>
  `;
}
