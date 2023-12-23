function combine (...args) {
  let res = [], found = true
  while (found) {
    found=false
    for (let arg of args) {
      if (arg.length) res.push(arg.shift())
      found=found || arg.length
    }
  }
  return res
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]))
console.log(['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5])