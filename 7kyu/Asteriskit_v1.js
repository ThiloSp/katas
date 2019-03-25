function asteriscIt(n) {
  let result = [];
  let nArray = [];
  let comma = n.toString().split('');
  for (let i = 0; i < comma.length; i++) {
    comma[i] === ',' ? undefined : nArray.push(comma[i]);
  }
  for (let i = 0; i < nArray.length; i++) {
    nArray[i] % 2 === 0 && nArray[i - 1] % 2 === 0
      ? result.push('*' + nArray[i])
      : result.push(nArray[i]);
  }
  return result.join('');
}
