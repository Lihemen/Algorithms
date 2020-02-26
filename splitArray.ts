function solution(str: string) {
  let arr = str.split('');
  if (arr.length % 2 !== 0) {
    arr.push('_')
  }
  return [arr.join(' ').]
}
console.log(solution('abc'))
console.log(solution('abcdef'))