const position1 = (x, y, p, start = ((2 * y) / x - (x - 1)) / 2) => Array.from(Array(x).keys()).map((x, i) => start + i)[p]
const position = (x, y, p) => (((2 * y) / x - (x - 1)) / 2) + p


console.log(position(4, 14, 3), 5)
console.log(position(2, 25, 0), 12)
console.log(position(7, 749, 5), 109)
console.log(position(3, -9, 1), -3)
console.log(position(5, 0, 0), -2)