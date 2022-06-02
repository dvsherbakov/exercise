function unusedDigits() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter(
      (val) =>
        !Object.values(arguments)
          .join('')
          .split('')
          .map((x) => +x)
          .includes(val)
    )
    .join('')
}

console.log(unusedDigits(12, 34, 56, 78))
