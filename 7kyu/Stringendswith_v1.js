function solution(str, ending) {
  let d = [];
  for (let i = str.length - ending.length; i < str.length; i++) {
    d.push(str[i]);
  }
  if (d.join('') === ending) {
    return true;
  } else {
    return false;
  }
}
