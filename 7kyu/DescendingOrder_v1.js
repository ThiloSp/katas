function descendingOrder(n) {
  let nArray = n
    .toString()
    .split('')
    .sort((a, b) => b - a);
  let result = parseInt(nArray.join(''));
  return result;
}
