function moveZeros(arr: any[]) {
  let zeros = arr.filter((e) => e === 0)
  let notZeros = arr.filter((e) => e !== 0)
  return notZeros.concat(zeros)
}
console.log(moveZeros([1,2,3,0,4,1,2,0,4,0,1]))