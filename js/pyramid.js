const pyramid = (n) =>
  Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill(1))

console.log(pyramid(0))
