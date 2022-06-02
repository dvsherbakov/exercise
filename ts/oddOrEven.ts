export const oddOrEven = (array: number[]): 'even' | 'odd' =>
  !(array.reduce((acc, itm) => acc + itm, 0) % 2) ? 'even' : 'odd'

console.log(oddOrEven([0, 1, 5]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))

//https://www.codewars.com/kata/5949481f86420f59480000e7
