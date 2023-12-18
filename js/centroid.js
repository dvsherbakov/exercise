const centroid = (c) =>
  c.reduce((a, x) => [a[0] + x[0], a[1] + x[1], a[2] + x[2]], [0, 0, 0]).map(y => Math.round(y * 100 / 3) / 100)


console.log(centroid([[1, 0, 5], [0, 1, 5], [2, 2, 5]]))
console.log(centroid([[7, 0, 5], [3, 1, 5], [2, 1, 5]]))