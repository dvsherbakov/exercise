//This time we want to write calculations using functions and get the results

// const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
// const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));

function zero() {
  return arguments.length > 0 ? arguments[0](0) : 0
}

function one() {
  if (arguments.length > 0) return arguments[0](1)
  return 1
}

function two() {
  if (arguments.length > 0) return arguments[0](2)
  return 2
}

function three() {
  if (arguments.length > 0) return arguments[0](3)
  return 3
}

function four() {
  if (arguments.length > 0) return arguments[0](4)
  return 4
}

function five() {
  if (arguments.length > 0) return arguments[0](5)
  return 5
}

function six() {
  if (arguments.length > 0) return arguments[0](6)
  return 6
}

function seven() {
  if (arguments.length > 0) return arguments[0](7)
  return 7
}

function eight() {
  if (arguments.length > 0) return arguments[0](8)
  return 8
}

function nine() {
  if (arguments.length > 0) return arguments[0](9)
  return 9
}

function plus(val) {
  return function(x) {
    return x + val
  }
}

function minus(val) {
  return function(x) {
    return x - val
  }
}

function times(val) {
  return function(x) {
    return x * val
  }
}

function dividedBy(val) {
  return function(x) {
    return Math.floor(x / val)
  }
}

console.log(seven(times(five())), 35)
console.log(four(plus(nine())), 13)
console.log(eight(minus(three())), 5)
console.log(six(dividedBy(two())), 3)