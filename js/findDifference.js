const findDifference = (a, b) =>
  Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])

console.log(findDifference([15, 20, 25], [10, 30, 25]))
