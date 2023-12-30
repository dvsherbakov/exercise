const comp = (array1, array2) => {
  if (!array1 || !array2) return false
  let found = true

  while (found) {
    const idx = array2.indexOf(array1[0] ** 2)
    if (idx >= 0) {
      array1.splice(0, 1)
      array2.splice(idx, 1)
    } else {
      found = false
    }
  }

  return !array1.length && !array2.length
}

const comp2 = (array1, array2) =>
  !!(array1 && array2) && `${array1.map(val => val ** 2).sort()}` === `${array2.sort()}`;


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19, 11 * 11]))
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([7, 4, 9, 9, 1, 6, 6, 5, 0, 1, 2, 1, 3, 7, 3, 1, 3, 5, 7, 0, 7], [9, 9, 49, 25, 49, 1, 36, 1, 36, 9, 81, 0, 49, 0, 16, 49, 81, 4, 25, 1, 1]))
console.log(comp([2, 2, 3], [4, 9, 9]))
console.log(comp(null, [4, 9, 9]))

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.