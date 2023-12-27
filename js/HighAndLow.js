function highAndLow(numbers) {
  const arr = numbers.split((' ')).map(x=>+x)
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}

console.log(highAndLow("1 9 3 4 -5"))