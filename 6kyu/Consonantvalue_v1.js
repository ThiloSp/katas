function solve(s) {
  let vocals = ['a', 'e', 'i', 'o', 'u'];
  let values = [];
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (vocals.includes(s[i])) {
      values.push(sum);
      sum = 0;
    } else sum += s.charCodeAt(i) - 96;
  }
  return values.sort((a, b) => b - a)[0];
}
