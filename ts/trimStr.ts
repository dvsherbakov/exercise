export const trim = (str: string, size: number): string =>
    str.length <= size ? str : str.length <= 3 || size<=3 ? str.substring(0,size)+'...' : str.substring(0, size-3)+'...'

console.log(trim("Creating kata is fun", 14))
console.log(trim("He", 1))
console.log(trim('LVqW',2))