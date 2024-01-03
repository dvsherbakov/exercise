function isPrime(num) {
  if (num === 1 || num <= 0) return false
  if (num === 2) return true
  let i = 2
  let isPrime = true
  while (i * i <= num) {
    if (num % i === 0) return false
    i++
  }
  return isPrime
}


console.log(isPrime(3))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(41))
console.log(isPrime(5099))


console.log(isPrime(-1))
console.log(isPrime(1))
console.log(isPrime(75))
console.log(isPrime(99))
console.log(isPrime(50))



