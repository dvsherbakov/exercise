function persistence(num) {
  if (num < 10) return 0
  else {
    let cnt = 0
    while (num >= 10) {
      num = num.toString().split('').reduce((a, x) => +x * a, 1)
      cnt++
    }
    return cnt
  }
}

console.log(persistence(39), 3)
console.log(persistence(4), 0)
console.log(persistence(25), 2)
console.log(persistence(999), 4)

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.