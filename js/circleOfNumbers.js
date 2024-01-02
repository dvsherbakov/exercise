const circleOfNumbers = (count, start) => (start + count / 2) % count


console.log(circleOfNumbers(10,2) , 7)
console.log(circleOfNumbers(10,7) , 2)
console.log(circleOfNumbers(4,1) , 3)
console.log(circleOfNumbers(6,3) , 0)
