function diagonalDifference(a: number[][]) {
  let priDiag = 0, secDiag = 0;

  for (var i =0; i < a[0].length; i++) {
    priDiag += a[i][i]
  }
  for (var i=0, j = a[0].length -1; j>= 0; i++, j--){
    secDiag += a[j][i]
  }
  return Math.abs(priDiag - secDiag)
}
console.log(diagonalDifference([[1,5,6], [2,5,7], [4,5,7]]))