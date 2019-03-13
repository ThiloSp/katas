var countSquares = function(cuts) {
  if (cuts === 0) {
    return 1;
  } else {
    let squaresTotal = (cuts + 1) * (cuts + 1) * 6;
    let squaresDouble = (cuts - 1) * 4 * 3;
    let corners = 24 - 8;
    let squares = squaresTotal - squaresDouble - corners;
    return squares;
  }
};
