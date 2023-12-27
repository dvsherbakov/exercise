const multiDimension = (d, arr) => {
  return d > 1 ? multiDimension(d - 1, arr) : [arr]
}

const createNDimensionalArray = (a, b) => {
  const lasLevel = Array(b).fill(Array(b).fill(`level ${a}`))

  return multiDimension(a, lasLevel)
}

console.log(createNDimensionalArray(2, 3))
