const cubeChecker = (volume, side) => side > 0 && volume > 0 && volume === side * side * side


console.log(cubeChecker(-1, 2), false)
console.log(cubeChecker(8, 3), false)
console.log(cubeChecker(8, 2), true)
console.log(cubeChecker(-8, -2), false)
console.log(cubeChecker(0, 0), false)
console.log(cubeChecker(1, 5), false)