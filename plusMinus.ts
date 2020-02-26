function plusMinus(arr: number[]){
  let positive = arr.filter((element) => element > 0).length;
  let negative = arr.filter((element) => element < 0).length;
  let zeros = arr.filter((element) => element == 0).length;
  let n = arr.length;
  console.log((positive/n).toFixed(5))
  console.log((negative/n).toFixed(5))
  console.log((zeros/n).toFixed(5))
}
console.log(plusMinus([3,3,0,-1,-2]))