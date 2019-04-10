function toCamelCase(str) {
  let result = [];
  let words = str.includes('_') ? str.split('_') : str.split('-');
  result.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    let singleWord = [];
    for (let k = 0; k < words[i].length; k++) {
      k === 0
        ? singleWord.push(words[i][k].toUpperCase())
        : singleWord.push(words[i][k]);
    }
    result.push(singleWord.join(''));
  }
  return result.join('');
}
