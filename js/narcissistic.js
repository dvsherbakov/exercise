const narcissistic = (val) => val.toString().split('').reduce((acc, x) => acc + Math.pow(+x, val.toString().length), 0) === val

console.log(narcissistic(7))
console.log(narcissistic(153))
console.log(narcissistic(122))
console.log(narcissistic(487))