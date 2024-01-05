const number = (arr) => arr.map((x, idx) => `${idx + 1}: ${x}`)

console.log(number([]), [], 'Empty array should return empty array')
console.log(number(['a', 'b', 'c']), ['1: a', '2: b', '3: c'], 'Return the correct line numbers')

// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1