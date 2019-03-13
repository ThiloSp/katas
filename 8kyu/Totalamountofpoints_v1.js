function points(games) {
  let sum = 0;
  games.forEach(function(pair) {
    if (pair[0] > pair[2]) {
      sum += 3;
    } else if (pair[0] === pair[2]) {
      sum += 1;
    }
  });
  return sum;
}
