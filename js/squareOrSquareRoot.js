const squareOrSquareRoot = (arr) =>
  arr.map((x) => (~~Math.sqrt(x) === Math.sqrt(x) ? Math.sqrt(x) : x * x))

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))
