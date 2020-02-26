function toCamelCase(str: string) {
  let arr = str.replace(/-/g, ' ').split(' ');
  let i = 1;
  let camel;
  while(i < arr.length) {
    camel = arr[i].split(' ').map(e => e[0].toUpperCase() + e.substr(1)).join(' ')
    i++
  }
  return camel;
}

console.log(toCamelCase('the-empty-string-is-meant-To-change-to-camelcase'));