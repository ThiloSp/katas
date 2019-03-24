function makeValley(arr) {
  arr.sort((a, b) => b - a);
  let resultArray = [];
  for (let i = 0; i < arr.length; i++)
    i % 2 === 0 ? resultArray.push(arr[i]) : undefined;
  for (let i = arr.length - 1; i > 0; i--)
    i % 2 !== 0 ? resultArray.push(arr[i]) : undefined;
  return resultArray;
}
