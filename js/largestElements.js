const largest = (n, xs) =>  xs.sort((a,b)=>b-a).slice(0,n).sort((a,b) => a-b)

console.log(largest(7,[9,1,50,22,3,13,2,63,5]))