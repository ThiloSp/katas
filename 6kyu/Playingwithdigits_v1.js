function digPow(n, p) {
  let sum = 0;
  let result = 0;
  let numbers = n.toString();
  for (let i = 0; i < numbers.length; i++) sum += Math.pow(numbers[i], p + i);
  sum % n === 0 ? (result = sum / n) : (result = -1);
  return result;
}
