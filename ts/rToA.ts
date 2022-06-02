// https://www.codewars.com/kata/51b6249c4612257ac0000005/solutions/typescript

export const solution = (src: string): number => {
  const map: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  return [...src].reduce(
    (r, c, i, s) => (map[s[i + 1]] > map[c] ? r - map[c] : r + map[c]),
    0
  )
}

console.log(solution('XXI'), 21)
console.log(solution('I'), 1)
console.log(solution('IV'), 4)
console.log(solution('MMVIII'), 2008)
console.log(solution('MDCLXVI'), 1666)

//npx ts-node ./rToA.ts
