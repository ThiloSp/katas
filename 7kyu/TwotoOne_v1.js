function longest(s1, s2) {
  let letterArray = [];
  let a = (s1 + s2).split('').sort();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[i + 1]) {
      letterArray.push(a[i]);
    }
  }
  return letterArray.join('');
}
