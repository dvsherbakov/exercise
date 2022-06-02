const arr = [
  { s: 10, e: 12 },
  { s: 21, e: 31 },
  { s: 3, e: 5 },
  { s: 11, e: 12 },
]

const res = arr.reduce(
  (acc, itm) =>
    acc.concat(itm.s < 15 ? [itm.s] : [], itm.e < 15 ? [itm.e] : []),
  []
)

console.log(res)
