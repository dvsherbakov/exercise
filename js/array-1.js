///Вернуть сумму всех квадратов
//
// console.log(
//   [1, 2, 3, 6].filter((x) => !(x % 2)).reduceRight((f, n) => f + n * n, 0)
// );
//
// console.log([5,	4, 2, 4, 5, 5, 5, 2].reduce(function(p,c,i,a){return p + (c/a.length)},0))

const a = [0, 1, 5, 3]
const b = [3]

const s =[...a, ...b].reduce((acc, elem)=>acc+elem, 0)
console.log(s)
