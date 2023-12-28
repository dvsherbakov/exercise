const digPow = (n, p, r = [...n.toString()].map((x, idx) => Math.pow(+x, idx + p)).reduce((a, v) => a + v) / n) =>
  r % 1 === 0 ? r : -1

const digPow2 = (n, p, k) => (k = [...'' + n].reduce((s, d) => s += d ** p++, 0) / n, Number.isInteger(k) ? k : -1)


console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(695, 2))
console.log(digPow2(46288, 3))

// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.