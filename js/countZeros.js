const countZeros = (n) => Array.from(Array(n).keys()).map(x => x + 1).reduce((acc, itm) => acc + ((itm).toString().match(/0/g) || []).length, 0)

console.log(countZeros(200))