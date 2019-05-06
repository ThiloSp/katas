//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;
  let eyes = [':', ';'];
  let nose = ['-', '~'];
  let mouth = [')', 'D'];
  for (let i = 0; i < arr.length; i++) {
    let face = arr[i].split('');
    if (face.length === 2 && eyes.includes(face[0]) && mouth.includes(face[1]))
      count++;
    if (
      face.length === 3 &&
      eyes.includes(face[0]) &&
      nose.includes(face[1]) &&
      mouth.includes(face[2])
    )
      count++;
  }
  return count;
}
