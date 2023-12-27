const  findShort = s => s.split(' ').reduce((a, x)=>Math.min(a, x.length), Number.MAX_SAFE_INTEGER)


console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);