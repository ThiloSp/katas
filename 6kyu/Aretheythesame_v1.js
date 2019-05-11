function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] !== Math.pow(array1[i], 2)) return false;
  }
  return true;
}
