const generateHashtag = (str, r = str.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase()).replaceAll(' ', '')) =>
  r.length > 0 && r.length < 140 ? '#' + r : false


console.log(generateHashtag('') === false, 'Expected an empty string to return false')
console.log(generateHashtag(' '.repeat(200)) === false, 'Still an empty string')
console.log(generateHashtag('Do We have A Hashtag') === '#DoWeHaveAHashtag', 'Expected a Hashtag (#) at the beginning.')
console.log(generateHashtag('Codewars') === '#Codewars', 'Should handle a single word.')
console.log(generateHashtag('Codewars Is Nice') === '#CodewarsIsNice', 'Should remove spaces.')
console.log(generateHashtag('Codewars is nice') === '#CodewarsIsNice', 'Should capitalize first letters of words.')
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars') === '#CodeWars')
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat') === false, 'Should return false if the final word is longer than 140 chars.')
console.log(generateHashtag('a'.repeat(139)) === '#A' + 'a'.repeat(138), 'Should work')
console.log(generateHashtag('a'.repeat(140)) === false, 'Too long')

//The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!