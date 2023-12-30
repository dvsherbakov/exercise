const maskify = (cc) => cc.length <= 4 ? cc : [...cc].reduce((acc, cur, idx) => idx < cc.length - 4 ? acc + '#' : acc + cur, '')

console.log(maskify('4556364607935616'), '############5616')
console.log(maskify('1'), '1')
console.log(maskify('11111'), '#1111')