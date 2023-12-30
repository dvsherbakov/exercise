function minSum(arr) {
  const tmp = arr.sort((a, b) => b - a)
  let f = 0, l = arr.length - 1, sum = 0
  while (l - f >= 1) {
    sum += tmp[f] * tmp[l]
    --l
    ++f
  }
  return sum
}

console.log(minSum([5, 4, 2, 3]), 22)
console.log(minSum([12, 6, 10, 26, 3, 24]), 342)
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74)