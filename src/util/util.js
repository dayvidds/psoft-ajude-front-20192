export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

export function toCammelCase(string) {
  return string
    .split(' ')
    .map((s, i) => (i === 0 ? s.toLowerCase() : capitalize(s)))
    .join('');
}

export function getFieldValue(id, e) {
  return e.target.querySelector(`#${id}`).value;
}

export function getUrlParameter(name) {
  const parsedName = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${parsedName}=([^&#]*)`);
  const url = location.hash.substring(location.hash.indexOf('?'));
  const results = regex.exec(url);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function formatDate(date) {
  return date
    .split('T')[0]
    .split('-')
    .reverse()
    .join('/');
}

export function formataDinheiro(quantia) {
  return `R$${quantia.toFixed(2)}`;
}
export function renderListFromFunction(name, list, func, content) {
  return `
    <div class="card">
      <h3>${capitalize(name)}</h3>
      ${content === undefined ? '' : content}
      <ul class="${name}">
        ${list.length === 0 ? `Sem ${name}` : list.map(func).join('')}
      </ul>
    </div>
  `;
}

export function getDinamicUrlValue(index) {
  return location.hash.split('/')[index];
}
