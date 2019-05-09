function inArray(array1, array2) {
  let result = [];
  array2.forEach(el1 => {
    array1.forEach(el2 => {
      if (el1.includes(el2) && !result.includes(el2)) result.push(el2);
    });
  });
  return result.sort();
}
