export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

export function toCammelCase(string) {
  return string
    .split(' ')
    .map((s, i) => (i === 0 ? s.toLowerCase() : capitalize(s)))
    .join('');
}
