var uniqueInOrder = function(iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    iterable[i] !== result[result.length - 1]
      ? result.push(iterable[i])
      : undefined;
  }
  return result;
};
