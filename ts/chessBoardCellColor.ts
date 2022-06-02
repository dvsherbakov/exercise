// https://www.codewars.com/kata/5894134c8afa3618c9000146
// compare chess cell color

export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const letters: string = 'ABCDEFGH'
  return (
    (letters.indexOf(cell1.split('')[0].toLocaleUpperCase()) +
      1 +
      +cell1.split('')[1]) %
      2 ===
    (letters.indexOf(cell2.split('')[0].toLocaleUpperCase()) +
      1 +
      +cell2.split('')[1]) %
      2
  )
}

console.log(chessBoardCellColor('A1', 'A2'))
console.log(chessBoardCellColor('A1', 'C3'))
