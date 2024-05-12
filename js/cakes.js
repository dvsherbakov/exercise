const cakes = (recipe, available) =>
  Math.min(...Object.keys(recipe).map(product => Math.floor((available[product] || 0) / recipe[product])))

const cakes2 = (recipe, available) => Math.min(...Object.keys(recipe).map(e => available[e]/recipe[e]>>0))

console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))
console.log(cakes2({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))
