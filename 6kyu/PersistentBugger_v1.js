function persistence(num) {
  let count = 0;
  let numberRed = num.toString();
  while (numberRed.toString().length > 1) {
    let resultArray = numberRed.toString().split('');
    numberRed = resultArray.reduce((acc, singleNumber) => acc * singleNumber);
    count++;
  }
  return count;
}
