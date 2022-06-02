const vaporcode = (str) =>
  str.replace(/\s/g, '').toUpperCase().split('').join('  ')

console.log(vaporcode("Let's go to the movies"))
