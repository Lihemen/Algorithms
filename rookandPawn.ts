function rookAndPawn(rook: string, pawn: string): boolean {
  const board = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8
  }
  const rookX = board[rook[0]];
  const rookY = parseInt(rook[1]);
  const pawnX = board[pawn[0]];
  const pawnY = parseInt(pawn[1]);

  if (rookX === pawnX || rookY === pawnY){
    return true;
  }
  return false;
}
console.log(rookAndPawn('a1', 'a5'));
console.log(rookAndPawn('a4', 'h4'));
console.log(rookAndPawn('a4', 'b7'));