function isPowerOfTwo(n) {
  let t = 2
  while (t < n) {
    t *= 2
  }
  return (n === t)||(n===1)
}

console.log(isPowerOfTwo(2), true)
console.log(isPowerOfTwo(4096), true)
console.log(isPowerOfTwo(5), false)
console.log(isPowerOfTwo(1), true)