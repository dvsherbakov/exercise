const sumNoDuplicates = (numList) =>
  numList.filter((num, index) => numList.indexOf(num) === index && numList.lastIndexOf(num) === index).reduce((sm, val) => sm + val, 0)


console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]))
console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]))