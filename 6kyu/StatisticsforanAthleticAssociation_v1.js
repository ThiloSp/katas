function stat(strg) {
  let runners;
  if (strg === '') {
    return '';
  } else {
    runners = strg.split(',');
  }

  let seconds = [];
  let formated = [];

  let splitted = runners.map(runner => runner.split('|'));
  splitted.forEach(runner => {
    seconds.push(
      parseInt(runner[0]) * 3600 +
        parseInt(runner[1]) * 60 +
        parseInt(runner[2]),
    );
    seconds.sort((a, b) => a - b);
  });

  let rangeSeconds = seconds[seconds.length - 1] - seconds[0];
  let range = `Range: ${format(rangeSeconds)}`;
  let averageSeconds = Math.floor(
    seconds.reduce((acc, runner) => acc + runner) / seconds.length,
  );
  let average = `Average: ${format(averageSeconds)}`;
  let medianSeconds =
    seconds.length % 2 === 0
      ? (seconds[Math.floor(seconds.length / 2) - 1] +
          seconds[Math.floor(seconds.length / 2)]) /
        2
      : seconds[Math.floor(seconds.length / 2)];
  let median = `Median: ${format(medianSeconds)}`;

  function format(secondsNumber) {
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let seconds = Math.floor(secondsNumber - hours * 3600 - minutes * 60);
    let hoursFormat = hours > 9 ? hours : `0${parseFloat(hours)}`;
    let minutesFormat = minutes > 9 ? minutes : `0${parseFloat(minutes)}`;
    let secondsFormat = seconds > 9 ? seconds : `0${parseFloat(seconds)}`;
    let formatSingle = [];
    formatSingle.push(hoursFormat);
    formatSingle.push(minutesFormat);
    formatSingle.push(secondsFormat);
    return formatSingle.join('|');
  }
  formated.push(range);
  formated.push(average);
  formated.push(median);
  return formated.join(' ');
}
