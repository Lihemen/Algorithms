function toJadenCase(str: string) {
  return str.split(' ').map((e) => e[0].toUpperCase() + e.substr(1) ).join(' ');
}
console.log(toJadenCase('the empty string'));