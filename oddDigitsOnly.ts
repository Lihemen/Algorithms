function oddDigitsOnly(n: number): boolean {
  const digits = n.toString().split('');

  return digits.every((digit)=> parseInt(digit) % 2 !== 0);
}
console.log(oddDigitsOnly(137952));
console.log(oddDigitsOnly(13795));