const processData = (data) => data.map(([f, s]) => f - s).reduce((acc, val) => acc * val, 1)


console.log(processData([[2, 5], [3, 4], [8, 7]]), 3, `For [[2, 5], [3, 4], [8, 7]]`)
console.log(processData([[2, 9], [2, 4], [7, 5]]), 28, `For [[2, 9], [2, 4], [7, 5]]`)