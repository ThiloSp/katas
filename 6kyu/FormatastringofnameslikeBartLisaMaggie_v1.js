function list(names) {
  let namesArray = [];
  names.forEach(name => {
    if (name === names[names.length - 1]) namesArray.push(name.name);
    else if (name === names[names.length - 2])
      namesArray.push(`${name.name} & `);
    else namesArray.push(`${name.name}, `);
  });
  return namesArray.join('');
}
