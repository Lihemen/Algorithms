function characterParity(input: string) : string {
  const result = parseInt(input);

  return isNaN(result) ? 'not a digit': result % 2 === 0 ?'even': 'odd';

  // if (isNaN(result)){
  //   return 'not a digit';
  // } else if (result % 2 === 0) {
  //   return 'even'
  // } else {
  //   return 'odd';
  // }
}
console.log(characterParity('8'));
console.log(characterParity('9'));
console.log(characterParity("what's up"));