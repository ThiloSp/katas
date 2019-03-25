function nbYear(p0, percent, aug, p) {
  let years = 0;
  let pop = p0;
  for (let i = 0; pop < p; i++) {
    pop += (pop * percent) / 100 + aug;
    years++;
  }
  return years;
}
