/**
 * Count the number of divisors of a positive integer `n`.
 */

const divisors = (n: number): number => {
  let count = 0
  for (let i = 1; i <= n; i++) n % i === 0 && count++
  return count
}

console.log(divisors(64))
