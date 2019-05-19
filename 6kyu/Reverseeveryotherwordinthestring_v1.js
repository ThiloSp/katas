function reverse(str) {
  if (!str.match(/[a-z]/i)) return '';
  let result = [];
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') arr.splice(i, 1);
    if (i % 2 === 0) {
      result.push(arr[i]);
    } else {
      let reversed = [];
      for (let k = arr[i].length - 1; k >= 0; k--) {
        reversed.push(arr[i][k]);
      }
      result.push(reversed.join(''));
    }
  }
  return result.join(' ');
}
