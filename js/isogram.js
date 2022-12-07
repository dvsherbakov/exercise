//(.)(.*)(\1)
const isIsogram = (str) => !new RegExp(/(.)(.*)(\1)/g).test(str.toLowerCase())


console.log(isIsogram('dermatoglyphics'))