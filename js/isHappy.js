// A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

function isHappy(n) {
  const ret = new Set([n])
  let cur = n

  while (cur > 1) {
    cur = cur
      .toString()
      .split('')
      .reduce((acc, t) => acc + t * t, 0)
    if (ret.has(cur)) break
    else ret.add(cur)
  }

  return cur === 1
}

console.log(isHappy(16))
