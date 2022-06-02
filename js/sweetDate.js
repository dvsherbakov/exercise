// John and Anne are a pair of lovebirds. They have their own jobs. John works w1 days off for r1 day and Anne works w2 days off for r2 days. Only when they have a rest, they can go out for a sweet date. Please calculate, they can date how many days in a time period?

function sweetDate(w1, r1, w2, r2, timePeriod) {
  let p1, p2
  let sum = 0
  for (let i = 0; i < timePeriod; i++) {
    p1 = i % (w1 + r1)
    p2 = i % (w2 + r2)
    if (p1 >= w1 && p2 >= w2) sum++
  }

  return sum
}

console.log(sweetDate(3, 1, 7, 3, 1000))
