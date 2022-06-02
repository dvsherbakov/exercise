//https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e/train/typescript

export function encode(text: string): string {
  return [...text]
    .map((x) =>
      [...('00000000' + (x.charCodeAt(0) >>> 0).toString(2)).slice(-8)]
        .map((y) => y.repeat(3))
        .join('')
    )
    .join('')
}

export function decode(bits: string): string {
  return (bits.match(/.{1,24}/g) || [])
    .map((x) =>
      String.fromCharCode(
        parseInt(
          (x.match(/.{1,3}/g) || [])
            .map((y) => ((y.match(/1/g) || []).length > 1 ? 1 : 0))
            .join(''),
          2
        )
      )
    )
    .join('')
}

console.log(
  encode('hey'),
  '000111111000111000000000000111111000000111000111000111111111111000000111'
)
console.log(
  decode(
    '100111111000111001000010000111111000000111001111000111110110111000010111'
  )
)
