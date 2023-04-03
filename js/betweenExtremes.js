const betweenExtremes = arr => {
  const { min, max } = arr.reduce((acc, x) => {
    if (x < acc.min) acc.min = x
    if (x > acc.max) acc.max = x
    return acc
  }, { min: arr[0], max: arr[0] })
  return max - min
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42)
console.log(betweenExtremes([-1, -41, -77, -100]), 99);