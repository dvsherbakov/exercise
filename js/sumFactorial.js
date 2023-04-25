
const factorialArrayReduceBetter =
  n => Array.from({length: n + 1}, (_, i) => i)
    .reduce((acc, curr) => acc * (curr === 0 ? 1 : curr), 1);

const sumFactorial = arr =>
  arr.map(x=>factorialArrayReduceBetter(x)).reduce((acc,v)=>acc+v,0)


console.log(sumFactorial([4,6]), 744);
console.log(sumFactorial([5,4,1]), 145);