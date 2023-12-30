const  isPangram2 = (str) =>
   ![...str.toLowerCase()].reduce((acc, v) =>  acc.replaceAll(v, ''), 'abcdefghijklmnopqrstuvwxyz').length


const isPangram = (string) => (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).