const uniqueInOrder = (iterable) => {
  if (!iterable || iterable.length === 0) return []

  let res = [iterable[0]]
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) res.push(iterable[i])
  }

  return res
}

console.log(uniqueInOrder([1, 2, 3, 3, 2, 1, 1, 0]))
