function factorial(n: number):number {
  let total = 1;

  if (n === 0) {
    total = 1;
    return total;
  }

  for(let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;

}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(17));