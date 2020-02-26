function compareTriplets(a: number[], b: number[]) {
  let alice = 0;
  let bob = 0
  for (var i =0; i < a.length; i++) {
    a[i] > b[i] ? alice +=1 : a[i] < b[i] ? bob += 1 : null;
  }
  return [alice, bob].join(' ')
}
console.log(compareTriplets([5,6,10], [7,6,3]))