function seekAndDestroy(arr1: number[], arr2: number[]): number[] {

  return arr1.filter((element) => !arr2.includes(element))

}
console.log(seekAndDestroy([2,4,8,7,5], [2,4,5]));