function accum(s) {
  let letters = s
    .toUpperCase()
    .split('')
    .map((letter, index) => letter + letter.repeat(index).toLowerCase())
    .join('-');
  return letters;
}
