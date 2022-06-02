// https://www.codewars.com/kata/559536379512a64472000053/solutions/typescript

export const playPass = (src: string, sh: number): string => {
  return [...src]
    .map((x) =>
      x.match(/[A-Z]/i)
        ? String.fromCharCode(
            x.charCodeAt(0) + sh <= 'Z'.charCodeAt(0)
              ? x.charCodeAt(0) + sh
              : x.charCodeAt(0) + sh - 26
          )
        : x.match(/[0-9]/i)
        ? (9 - +x).toString()
        : x
    )
    .map((y, i) => (i % 2 === 1 ? y.toLowerCase() : y))
    .reverse()
    .join('')
}

console.log(playPass('BORNZ IN 2015!', 0))
