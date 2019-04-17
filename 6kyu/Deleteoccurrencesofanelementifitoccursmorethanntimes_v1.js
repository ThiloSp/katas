function deleteNth(arr, n) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let occurrence = arr.filter(e => e === arr[i]).length;
    if (occurrence > n) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
