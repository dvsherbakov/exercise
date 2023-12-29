const binaryArrayToNumber1 = arr => parseInt(arr.join(''), 2)

const binaryArrayToNumber = (arr) => arr.reduce((a, b) => a << 1 | b)


console.log(binaryArrayToNumber([0, 0, 0, 1]), 1)
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2)
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15)
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6)

//Given an array of ones and zeroes, convert the equivalent binary value to an integer.