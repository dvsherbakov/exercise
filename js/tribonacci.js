function tribonacci(signature, n) {
  while (signature.length < n) signature.push(signature.slice(-3).reduce((acc, v) => acc + v, 0))
  return signature.slice(0, n)
}

console.log(tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
console.log(tribonacci([0, 0, 1], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
console.log(tribonacci([0, 1, 1], 10), [0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
console.log(tribonacci([1, 0, 0], 10), [1, 0, 0, 1, 1, 2, 4, 7, 13, 24])
console.log(tribonacci([0, 0, 0], 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
console.log(tribonacci([1, 2, 3], 10), [1, 2, 3, 6, 11, 20, 37, 68, 125, 230])
console.log(tribonacci([3, 2, 1], 10), [3, 2, 1, 6, 9, 16, 31, 56, 103, 190])
console.log(tribonacci([1, 1, 1], 1), [1])

//Well met with Fibonacci bigger brother, AKA Tribonacci.