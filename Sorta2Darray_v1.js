function namesSorter(departmentsArray) {
  let arrayAll = [];
  departmentsArray.forEach(department => arrayAll.push(...department));
  return arrayAll.sort((a, b) => a.length - b.length || a.localeCompare(b));
}
