function seatsInTheatre(nCols: number, nRows: number, col:number, row:number): number {
  const colDiv = nCols - col + 1;
  const rowDiv = nRows - row;

  return colDiv * rowDiv
}
console.log(seatsInTheatre(16,11,4,5));