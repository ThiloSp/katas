function upArray(arr) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (0 > arr[i] || arr[i] > 9) return null;
  }
  arr[arr.length - 1]++;
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= 9) result.unshift(arr[i]);
    if (arr[i] === 10 && i != 0) {
      result.unshift(0);
      arr[i - 1]++;
    }
    if (i === 0 && arr[i] === 10) {
      result.unshift(0);
      result.unshift(1);
    }
  }
  return result;
}
