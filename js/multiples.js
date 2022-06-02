function solution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) if (i % 3 == 0 || i % 5 == 0) sum += i;
  return sum;
}

console.log(
  [...new Array(10).keys()]
    .filter((x) => x % 3 == 0 || x % 5 == 0)
    .reduce((a, b) => a + b)
);
console.log(solution(10));
