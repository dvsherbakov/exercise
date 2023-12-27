function movie(card, ticket, perc) {
  let sumA = 0
  let sumB = card
  let count = 0
  let prev = ticket
  do {
    sumA += ticket
    prev *= perc
    sumB += prev
    count++
  } while (sumA <= Math.ceil(sumB))

  return count
}

console.log(movie(0, 10, 0.95))
console.log(movie(153397, 3, 0.34))
