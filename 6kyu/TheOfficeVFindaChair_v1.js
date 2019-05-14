function meeting(x, need) {
  if (need === 0) return 'Game On';
  let result = [];
  for (let i = 0; i < x.length; i++) {
    availableChairs = x[i][1] - x[i][0].length;
    if (availableChairs > 0) {
      let stillNeed = need;
      if (result.length > 0)
        stillNeed = need - result.reduce((acc, chairs) => acc + chairs);
      if (availableChairs < stillNeed) result.push(availableChairs);
      else {
        result.push(stillNeed);
        return result;
      }
    } else result.push(0);
  }
  return 'Not enough!';
}
