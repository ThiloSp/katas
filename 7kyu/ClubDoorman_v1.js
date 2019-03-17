function passTheDoorMan(word) {
  let number = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) === word.charCodeAt(i + 1)) {
      number += (word.charCodeAt(i) - 96) * 3;
    }
  }
  return number;
}
