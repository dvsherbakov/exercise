// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

export function cleanString(s: string): string {
  return [...s].reduce(
    (prev, cur) => (cur === '#' ? prev.slice(0, -1) : (prev += cur)),
    ''
  )
}

console.log(cleanString('abc####d##c#'))
