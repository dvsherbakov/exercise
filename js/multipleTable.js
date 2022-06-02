//Your goal is to return multiplication table for number that is always an integer from 1 to 10.

const multiTable = (number) =>
  [...Array(10).keys()]
    .map((n) => `${n + 1} * ${number} = ${(n + 1) * number}`)
    .join('\n')

const mt = (n) =>
  Array.from(Array(10), (e, i) => `${++i} * ${n} = ${i * n}`).join('\n')

console.log(mt(5))
