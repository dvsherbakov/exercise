const incrementer = (arr) => arr.map((elem, idx) => (elem + idx + 1) % 10)

console.log(incrementer([4, 6, 7, 1, 3]))
