const findSum = (arr, k) => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === k) return [arr[left], arr[right]]
    if (sum < k) left++; else right--
  }
  return []
}

console.log(findSum([-9, -5, -2, -1, 1, 4, 9, 11], 3))
