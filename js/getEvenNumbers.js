function getEvenNumbers(numbersArray) {
  return numbersArray.filter((elem) => elem % 2 === 0)
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]))
