const nbDig = (n, d) => Array.from({ length: n + 1 }, (_, i) => i * i).reduce((acc, val) => acc + [...val.toString().matchAll(new RegExp(d, 'g'))].length, 0)

const nbDig2 = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length

console.log(nbDig(10, 1))
console.log(nbDig2(25, 1))

//Count the numbers of digits d used in the writing of all the k**2.