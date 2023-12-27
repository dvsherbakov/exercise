const symFreq = (str) =>
  objFieldsSort(
    Array.from(new Set([...str].filter((sym) => sym.match(/[a-z]/)))).reduce(
      (acc, itm) => ({ ...acc, [itm]: str.match(new RegExp(itm, 'g')).length }),
      {}
    )
  )

const objKeySort = (list) => Object.keys(list).sort((a, b) => list[a] - list[b])

const objFieldsSort = (list) =>
  objKeySort(list).reduce(
    (acc, itm) => (list[itm] > 1 ? { [itm]: list[itm], ...acc } : acc),
    {}
  )

const joinArrays = (a1, a2) =>
  Array.from(new Set([...a1, ...a2]))
    .sort()
    .reverse()

function mix(s1, s2) {
  const [r1, r2] = [symFreq(s1), symFreq(s2)]
  console.log(r1, r2)
  const counts = joinArrays(Object.keys(r1), Object.keys(r2))

  return counts
}

//console.log(symFreq('jsad;fjgoei;wrjkj;laskjdfji'));
console.log(mix('Are they here', 'yes, they are here'))
