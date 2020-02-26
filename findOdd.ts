function findOdd(a: number[]): number {
  // Happy coding
  a = a.sort((a,b) => a-b)
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i+1] && a[i+2]) {
      return a[i];
    }
  }
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))