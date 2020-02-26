function candies(n: number, m: number) {
  const candy = Math.floor(m/n);

  return `candy received: ${candy}, no. shared: ${candy * n}, no. left: ${m - (candy * n)} `;
}
console.log(candies(3,13));
console.log(candies(4,13));
console.log(candies(5,13));