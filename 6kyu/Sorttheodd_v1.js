function sortArray(array) {
  let odds = [];
  result = [];
  array.forEach(el => {
    if (el % 2 != 0) odds.push(el);
  });
  odds.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    } else {
      result.push(odds[0]);
      odds.shift();
    }
  }
  return result;
}
