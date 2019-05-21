function alphabetWar(fight) {
  let count = 0;
  for (let i = 0; i < fight.length; i++) {
    if (fight[i] !== '*' && fight[i - 1] !== '*' && fight[i + 1] !== '*') {
      if (fight[i] === 'w') count = count + 4;
      else if (fight[i] === 'p') count = count + 3;
      else if (fight[i] === 'b') count = count + 2;
      else if (fight[i] === 's') count++;
      else if (fight[i] === 'm') count = count - 4;
      else if (fight[i] === 'q') count = count - 3;
      else if (fight[i] === 'd') count = count - 2;
      else if (fight[i] === 'z') count--;
    }
  }
  if (count > 0) return 'Left side wins!';
  else if (count < 0) return 'Right side wins!';
  else return "Let's fight again!";
}
