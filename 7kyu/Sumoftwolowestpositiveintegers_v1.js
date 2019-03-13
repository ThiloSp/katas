function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function(a, b) {
    if (b > a) {
      return -1;
    }
    if (b < a) {
      return 1;
    }
    return 0;
  });
  return numbers[0] + numbers[1];
}
