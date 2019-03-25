function fizzBuzzCuckooClock(time) {
  let numbers = time.split(':').map(number => parseInt(number));
  let hours = numbers[0];
  if (numbers[0] > 12) hours = numbers[0] - 12;
  else if (numbers[0] === 0) hours = 12;
  if (numbers[1] === 0) {
    let cuckoos = [];
    for (let i = 1; i <= hours; i++) {
      cuckoos.push('Cuckoo');
    }
    return cuckoos.join(' ');
  } else if (numbers[1] === 30) return 'Cuckoo';
  else if (numbers[1] % 3 === 0 && numbers[1] % 5 === 0) return 'Fizz Buzz';
  else if (numbers[1] % 3 === 0) return 'Fizz';
  else if (numbers[1] % 5 === 0) return 'Buzz';
  else return 'tick';
}
