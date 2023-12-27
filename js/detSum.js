const getSum1 = (a, b) => {
  [a, b] = [a, b].sort((a, b) => a - b)
  return Array.from({ length: b - a + 1 }, (x, i) => a + i).reduce((a, x) => a + x, 0)
}

const GetSum = (a,b) => (Math.abs(a - b) + 1) * (a+b) / 2

console.log(GetSum(10, 1))
