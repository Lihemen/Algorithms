function checDuplicates(arr: number[]): boolean {
  arr = arr.sort((a, b) => a-b);
  console.log(arr)

  for(let i=0; i <arr.length; i++) {
    if (arr[i] === arr[i +1]) {
      return true
    }
  }return false;
}
console.log(checDuplicates([0, 5, 1, 2, 8,0]));