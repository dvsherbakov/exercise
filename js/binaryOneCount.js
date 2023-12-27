//Сосчитать сумму единиц в двоичном формате числа

const countBits = (n) => {
  let sum = 0
  while (n >= 1) {
    sum += n % 2
    n = Math.floor(n / 2)
  }
  return sum
}

console.log(countBits(4))
