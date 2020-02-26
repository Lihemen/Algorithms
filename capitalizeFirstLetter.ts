function capitalizeFirstLetter(s: string): string {
  return s.split(' ').map(element => element[0].toUpperCase() + element.substring(1)).join(' ')
}
console.log(capitalizeFirstLetter('how can mirrors be real if our eyes arent real'));