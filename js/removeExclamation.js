const remove = str => str.split(' ').filter(x => x.split('').filter(y => y === '!').length !== 1).join(' ')

console.log(remove("Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi! Hi! Hi!"));
console.log(remove("Hi Hi! Hi!"));
console.log(remove("Hi! !Hi Hi!"));
console.log(remove("Hi! Hi!! Hi!"));
console.log(remove("Hi! !Hi! Hi! One"));