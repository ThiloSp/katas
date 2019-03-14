function partlist(arr) {
  let join = [];
  let piecesAll;
  for (let i = 1; i < arr.length; i++) {
    let piecesAll = [];
    piecesAll.push(arr.slice(0, i).join(' '));
    piecesAll.push(arr.slice(i).join(' '));

    join.push(piecesAll);
  }
  return join;
}
