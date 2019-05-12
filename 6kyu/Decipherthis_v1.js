function decipherThis(str) {
  let result = [];
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let singleWord = [];
    let wordParts = words[i].split(/([0-9]+)/).filter(Boolean);

    singleWord.push(String.fromCharCode(parseInt(wordParts[0])));

    if (wordParts.length > 1) {
      for (let k = 0; k < wordParts[1].length; k++) {
        if (k === 0) singleWord.push(wordParts[1][wordParts[1].length - 1]);
        else if (k === wordParts[1].length - 1)
          singleWord.push(wordParts[1][0]);
        else singleWord.push(wordParts[1][k]);
      }
    }
    result.push(singleWord.join(''));
  }
  return result.join(' ');
}
