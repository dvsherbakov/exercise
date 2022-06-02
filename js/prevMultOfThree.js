const prevMultOfThree = (n) => {
  while (n % 3 !== 0) {
    n = Math.floor(n / 10)
  }
  return n && n % 3 === 0 ? n : null
}

console.log(prevMultOfThree(1))
