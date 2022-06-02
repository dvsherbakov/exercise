const arrayDiff = (a, b) => a.filter((itm) => !b.includes(itm))

console.log(arrayDiff([1, 2, 3], [1, 2]))
