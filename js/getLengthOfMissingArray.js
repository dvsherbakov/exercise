const getLengthOfMissingArray = (arr) =>
  arr === null || arr.some(x => x === null) || arr?.some(x => x?.length === 0) ? 0 :
    arr?.sort((a, b) => a?.length - b?.length).filter((x, idx) => idx === 0 ? false : x?.length - arr[idx - 1]?.length !== 1).pop()?.length - 1 || 0


console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 3)
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 2)
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2)
console.log(getLengthOfMissingArray([]), 0)
console.log(getLengthOfMissingArray([[1],
  [2, 3],
  [],
  [3, 4, 0, 0, 3, 3, 3, 4],
  [0, 2, 0, 2, 2, 0, 1],
  [2, 0, 4, 0, 4, 1, 0, 0, 2],
  [3, 1, 4],
  [3, 2, 3, 3, 3],
  [2, 4, 3, 2, 4, 1]]), 0)

//You have to write a method, that return the length of the missing array.