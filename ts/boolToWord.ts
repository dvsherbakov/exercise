export const boolToWord = (bool: boolean): string => {
  return bool ? 'Yes' : 'No'
}

console.log(boolToWord(true))
console.log(boolToWord(false))
