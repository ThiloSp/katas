function createPhoneNumber(numbers) {
  let phone = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      phone.push(`(${numbers[i]}`);
    } else if (i === 2) {
      phone.push(`${numbers[i]}) `);
    } else if (i === 5) {
      phone.push(`${numbers[i]}-`);
    } else {
      phone.push(`${numbers[i]}`);
    }
  }
  return phone.join('');
}
