function wave(word) {
  let letters = word.split('');
  let result = [];
  for (let i = 0; i < letters.length; i++) {
    let singleWord = [];
    letters.forEach((letter, index) =>
      index === i
        ? singleWord.push(letter.toUpperCase())
        : singleWord.push(letter),
    );
    word[i] === ' ' ? undefined : result.push(singleWord.join(''));
  }
  return result;
}
