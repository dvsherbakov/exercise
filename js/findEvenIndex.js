const findEvenIndex = arr => {
  let sumLeft = 0
  let sumRight = arr.slice(1).reduce((acc, itm) => acc + itm, 0)
  let pointer = 0
  while (sumLeft !== sumRight && pointer < arr.length) {
    pointer += 1
    sumLeft += arr[pointer - 1]
    sumRight -=  arr[pointer]
  }
  return sumLeft !== sumRight ? -1 : pointer
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3, 'The array was: [1,2,3,4,3,2,1] \n')
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1, 'The array was: [1,100,50,-51,1,1] \n')
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1, 'The array was: [1,2,3,4,5,6] \n')
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3, 'The array was: [20,10,30,10,10,15,35] \n')
console.log(findEvenIndex([1, 2, 3, -6,5]) === 4, 'The array was: [1,2,3,-6,5] \n')