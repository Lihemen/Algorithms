function extractMatrixColumn(matrix: number[][], column: number): number[] {
  const matrixColumn: number[] = [];

  matrix.forEach((row) => matrixColumn.push(row[column]))

  return matrixColumn;
}
console.log(extractMatrixColumn([[1,2,3,4,5], [1,5,8,9,6], [1,4,5,6,9]], 2))