function validate(n) {
  let nArray = [];
  let nString = n.toString();
  for (let i = 0; i < nString.length; i++) {
    if (nString.length % 2 === 0) {
      if (i % 2 === 0) {
        parseInt(nString[i]) * 2 > 9
          ? nArray.push(parseInt(nString[i]) * 2 - 9)
          : nArray.push(parseInt(nString[i]) * 2);
      } else {
        nArray.push(parseInt(nString[i]));
      }
    } else {
      if (i % 2 !== 0) {
        parseInt(nString[i]) * 2 > 9
          ? nArray.push(parseInt(nString[i]) * 2 - 9)
          : nArray.push(parseInt(nString[i]) * 2);
      } else {
        nArray.push(parseInt(nString[i]));
      }
    }
  }
  return nArray.reduce((a, n) => a + n) % 10 === 0 ? true : false;
}
