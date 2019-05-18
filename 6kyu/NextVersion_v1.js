function nextVersion(version) {
  let arr = version.split('.').map(el => parseInt(el));
  arr[arr.length - 1] = arr[arr.length - 1] + 1;
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= 9) result.unshift(arr[i]);
    if (arr[i] > 9 && i != 0) {
      result.unshift(0);
      arr[i - 1]++;
    }
    if (i === 0 && arr[i] > 9) {
      result.unshift(arr[i]);
    }
  }
  return result.join('.');
}
