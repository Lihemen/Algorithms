function sumSmallestNumbers(numbers: number[]): number{
  const sortedArr = numbers.sort((a,b)=>a-b);
  return sortedArr[0] + sortedArr[1];
}
console.log(sumSmallestNumbers([5,8,12,19,22]));