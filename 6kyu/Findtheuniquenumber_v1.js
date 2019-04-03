function findUniq(arr) {
  let singleNumber = [];
  arr.sort();
  if (arr[0] !== arr[1] && arr[0] !== arr[2]) singleNumber.push(arr[0]);
  if (
    arr[arr.length - 1] !== arr[arr.length - 2] &&
    arr[arr.length - 1] !== arr[arr.length - 3]
  )
    singleNumber.push(arr[arr.length - 1]);
  return singleNumber[0];
}
