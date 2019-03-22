function swap(st) {
  let newStr = [];
  let vowels = 'aeiou';
  for (let i = 0; i < st.length; i++) {
    if (vowels.includes(st[i])) {
      newStr.push(st[i].toUpperCase());
    } else {
      newStr.push(st[i]);
    }
  }
  return newStr.join('');
}
