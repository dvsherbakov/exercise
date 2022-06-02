// our task is to remove all duplicate words from a string, leaving only single (first) words entries.

const removeDuplicateWords = (s) =>
  s
    .split(/\W+/)
    .reduce((acc, itm) => (acc.includes(itm) ? [...acc] : [...acc, itm]), [])

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
)
