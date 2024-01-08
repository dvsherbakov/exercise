const twoSum = (numbers, target) => {
  let i = 0, j = 1
  let found = false
  while (!found) {
    if (numbers[i] + numbers[j] === target) {
      found = true
    } else {
      if (j >= numbers.length) {
        j = ++i + 1
      } else {
        j++
      }
    }
  }
  return [i, j]
}

function twoSum2(arr, sum, a = 0, b = 1) {
  if (b === arr.length) return twoSum(arr, sum, a + 1, 0)
  return arr[a] + arr[b] === sum ? [a, b] : twoSum(arr, sum, a, b + 1)
}

console.log(twoSum([1, 2, 3], 4))
console.log(twoSum2([3, 2, 4], 6))

//It should find two different items in the array that, when added together, give the target value