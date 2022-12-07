const removeSmallest = (arr, minIdx = arr.indexOf(Math.min(...arr))) => {
  return [...arr.slice(0, minIdx), ...arr.slice(minIdx + 1)]
}

console.log(removeSmallest([2, 2, 1, 2, 1]))