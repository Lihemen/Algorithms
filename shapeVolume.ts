function shapeVolume(n: number): number {
  let vol = n ** 3;
  for (let i =1; i < n; i++){
    vol += i ** 3;
  }
  return vol;
}
console.log(shapeVolume(10));