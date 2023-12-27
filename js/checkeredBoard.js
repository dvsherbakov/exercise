const checkeredBoard = (dim, cells = ['□', '■']) => Array.from(
  { length: dim },
  (_, rowIdx) =>
    Array.from(
      { length: dim },
      (_, colIdx) =>
        (((colIdx % 2) + (rowIdx % 2)) % 2 + dim % 2) % 2).map(x => cells[x]).join(' ')).join('\n')


//console.log(["□ ■","■ □"].join("\n"))
console.log(checkeredBoard(5))
//console.log(checkeredBoard(3))