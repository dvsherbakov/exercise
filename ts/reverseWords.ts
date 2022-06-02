// reverse those words
export function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ')
}

console.log(reverseWords('row row row your boat'))
