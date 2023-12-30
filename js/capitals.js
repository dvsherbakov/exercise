const capitals = (word) =>
  word.split('').reduce((acc, val, idx)=>val===val.toUpperCase() ? [...acc, idx] : acc, [])

console.log(capitals('CodEWaRs'), [0,3,4,6])