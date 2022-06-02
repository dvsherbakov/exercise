//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

export const solution = (str: string, ending: string): boolean =>
  str.endsWith(ending)

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', ''))
