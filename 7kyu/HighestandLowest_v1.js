function highAndLow(numbers) {
  let newArray = numbers.split(' ').sort((a, b) => b - a);
  if (newArray.length === 1) {
    newArray.push(newArray[0]);
    return newArray.join(' ');
  } else {
    let middlePart = newArray.splice(1, newArray.length - 2);
    return newArray.join(' ');
  }
}
