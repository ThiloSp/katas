function reverseWords(str) {
  let a = str.split(' ');
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(
      a[i]
        .split('')
        .reverse()
        .join(''),
    );
  }
  return b.join(' ');
}
