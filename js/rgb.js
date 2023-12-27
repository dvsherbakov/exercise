function rgb(r, g, b) {
  return [...arguments].map(t => t < 0 ? 0 : t).map(x => (x > 255 ? x - (x % 255) : x).toString(16).toUpperCase().padStart(2, '0')).join('')
}

console.log(rgb(0, 0, 0))
console.log(rgb(0, 0, -20))
console.log(rgb(300, 255, 255))
console.log(rgb(173, 255, 47))

