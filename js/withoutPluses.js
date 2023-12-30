const add = (x, y) => {
  let res = x ^ y
  let c = (x & y) << 1
  while (c) {
    const tmp = res
    res = res ^ c
    c = (tmp & c) << 1
  }
  return res
}

console.log(add(5, 19), add(-27, 18), add(-14, -16))
