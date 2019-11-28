import { URL_CAMPANHA } from '../../util/app-routes.js';
import { formataDinheiro, formatDate } from '../../util/util.js';
import { renderLinkUsuario } from '../usuario/RenderersComponentsUsuario.js';

export function renderLinkCampanha(nomeCurto, url) {
  const campanhaURL = [URL_CAMPANHA, url].join('/');
  return `<a href="#${campanhaURL}">${nomeCurto}</a>`;
}

export function renderNomeCampanha(nomeCurto, url) {
  return `<h2>${renderLinkCampanha(nomeCurto, url)}</h2>`;
}

export function renderDescricao(descricao) {
  return `<h3>${descricao}</h3>`;
}

export function renderDeadline(date) {
  const dateString = formatDate(date);
  return `<h4>Deadline: ${dateString}</h4>`;
}

export function renderMeta(meta) {
  return `<h4>Meta: ${meta}</h4>`;
}

export function renderQuantiaFaltante(meta, doacoes) {
  const totalArrecadado = doacoes.map((d) => d.quantiaDoada).reduce((d1, d2) => d1 + d2, 0);
  const quantiaFaltante = meta - totalArrecadado;
  return quantiaFaltante > 0
    ? `<h4>Quantia faltante: ${formataDinheiro(quantiaFaltante)}</h4>`
    : `<h4>Total arrecadado: ${formataDinheiro(totalArrecadado)} (Meta atingida)</h4>`;
}

export function renderUsuarioDono(usuarioDono) {
  return `<h4>Usuario dono: ${renderLinkUsuario(usuarioDono)}</h4>`;
}

export function renderComentario(comentario) {
  return `
    <p>${renderLinkUsuario(comentario.donoComentario)} - ${comentario.conteudo}<p>
  `;
}

export function renderLike(like) {
  return renderLinkUsuario(like);
}

export function renderDoacao(doacao) {
  return `<p>${renderLinkUsuario(doacao.doador)} (${formatDate(doacao.dataDoacao)}) - R$${doacao.quantiaDoada.toFixed(2)}</p>`;
}
