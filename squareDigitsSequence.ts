function squareDigitsSequence(a0: number): number {
  let count = 1;

  const uniqueNums = [a0];
  while(true) {
    a0 = digitPower(a0);
    count++;

    if(uniqueNums.includes(a0)) {
      return count;
    }
    uniqueNums.push(a0);

  }

}

function digitPower(n: number): number {
  const digits = n.toString().split('').map((element) => parseInt(element) ** 2)
  const sum = digits.reduce((a, b) => a + b);
  return sum;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(161));
console.log(squareDigitsSequence(103));
console.log(squareDigitsSequence(0));