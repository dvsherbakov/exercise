function dirReduc(arr: string[]) {
  const fb = (a: string, b: string) =>
    (a === 'NORTH' && b === 'SOUTH') ||
    (a === 'SOUTH' && b === 'NORTH') ||
    (a === 'EAST' && b === 'WEST') ||
    (a === 'WEST' && b === 'EAST')

  let idx: number[] = []
  for (let i = 1; i < arr.length; i++) {
    if (fb(arr[i - 1], arr[i])) {
      idx = idx.concat([i - 1, i])
      i++
    }
  }
  let res = arr.filter((_, id) => !idx.includes(id))
  if (res.length !== arr.length) res = dirReduc(res)
  return res
}

console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
)
