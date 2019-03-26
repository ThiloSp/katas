var whatTimeIsIt = function(angle) {
  let angleMinute = 360 / 12 / 60;
  let totalMinutes = angle / angleMinute;
  let hours =
    Math.floor(totalMinutes / 60) === 0 ? 12 : Math.floor(totalMinutes / 60);
  let minutes = Math.floor(totalMinutes - Math.floor(totalMinutes / 60) * 60);
  let timeArray = [];

  hours > 9 ? timeArray.push(hours) : timeArray.push(`0${hours.toString()}`);
  minutes > 9
    ? timeArray.push(minutes)
    : timeArray.push(`0${minutes.toString()}`);
  return timeArray.join(':');
};
