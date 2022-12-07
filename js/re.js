function onlyOddDigPrimes(n) {
  let res = [2]
  for (let i = 3; i < n; i += 2) {
    let isPrime = true
    for (let k = 0, limit = Math.sqrt(i); res[k] <= limit; ++k) {
      let d = res[k]
      if (i % d == 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) res.push(i)
  }
  return res.filter((t) => ![...t.toString()].some(x => +x % 2 === 0))
}



console.log(onlyOddDigPrimes(20))