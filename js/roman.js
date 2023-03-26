const solution = (n) =>
  [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100,
    'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9,
    'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]
    .reduce((a, lstPair) => {
      const m = a.remainder, v = lstPair[0]
      return (v > m ? a : {
        remainder: m % v,
        roman: a.roman + Array(
          Math.floor(m / v) + 1,
        ).join(lstPair[1]),
      })
    }, { remainder: n, roman: '' }).roman


console.log(solution(1) === 'I', '1 should return "I"')
console.log(solution(2) === 'II', '2 should return "II"')
console.log(solution(3) === 'III', '3 should return "III"')
console.log(solution(4) === 'IV', '4 should return "IV"')
console.log(solution(5) === 'V', '5 should return "V"')
console.log(solution(9) === 'IX', '9 should return "IX"')
console.log(solution(10) === 'X', '10 should return "X"')
console.log(solution(11) === 'XI', '11 should return "XI"')
console.log(solution(19) === 'XIX', '19 should return "XIX"')
console.log(solution(22) === 'XXII', '22 should return "XXII"')
console.log(solution(15) === 'XV', '15 should return "XV"')
console.log(solution(1000) === 'M', '1000 should, "M"')
console.log(solution(1001) === 'MI', '1001 should, "MI"')
console.log(solution(1990) === 'MCMXC', '1990 should, "MCMXC"')
console.log(solution(2007) === 'MMVII', '2007 should, "MMVII"')
console.log(solution(2008) === 'MMVIII', '2008 should, "MMVIII"')