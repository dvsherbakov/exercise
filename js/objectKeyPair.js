const solution = (pairs) =>  Object.entries(pairs).map(x =>`${x[0]} = ${x[1]}`).join(',')



console.log(solution({a: 1, b: '2'}))
console.log(solution({kk: 2232, b: 'moreover'}))