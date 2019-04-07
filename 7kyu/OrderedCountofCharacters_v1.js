var orderedCount = function(text) {
  let result = [];
  let letters = [];
  for (let i = 0; i < text.length; i++) {
    let subArray = [];
    if (!letters.includes(text[i])) {
      letters.push(text[i]);
      subArray.push(text[i]);
      subArray.push(text.split(text[i]).length - 1);
      result.push(subArray);
    }
  }
  return result;
};
