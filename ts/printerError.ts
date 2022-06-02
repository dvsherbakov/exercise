function printerError(s: string): string {
  return `${s.match(/[n-z]/g).length}/${s.length}`
}

console.log(printerError('kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))
// https://www.codewars.com/kata/56541980fa08ab47a0000040/solutions/typescript