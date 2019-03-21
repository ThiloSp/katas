function XO(str) {
  let xArray = [];
  let oArray = [];
  let a = str
    .toLowerCase()
    .split('')
    .forEach(letter => {
      if (letter === 'o') {
        oArray.push(letter);
      } else if (letter === 'x') {
        xArray.push(letter);
      }
    });
  if (oArray.length === xArray.length) {
    return true;
  } else {
    return false;
  }
}
