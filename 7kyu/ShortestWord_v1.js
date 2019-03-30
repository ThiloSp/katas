function findShort(s) {
  let wordsLength = [];
  let x = s.split(' ').map(word => wordsLength.push(word.length));
  return wordsLength.sort((a, b) => a - b)[0];
}
