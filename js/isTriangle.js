const isTriangle2 = (a, b, c) => {
  [a, b, c] = [a, b, c].sort((x, y) => x - y)
  return a + b > c
}

const isTriangle = (a, b, c) => Math.max(a,b,c)<(a+b+c)/2

console.log(isTriangle(2, 5, 6))
console.log(isTriangle(2, 5, 2))
console.log(isTriangle(1, 2, 2), true)
console.log(isTriangle(7, 2, 2), false)