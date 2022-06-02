const high = (x, score = 0, word = '') => {
  const getWordScore = (s) => {
    const alphabet = '_abcdefghijklmnopqrstuvwxyz'
    return s.split('').reduce((acc, el) => acc + alphabet.indexOf(el), 0)
  }

  x.split(' ').forEach((element) => {
    if (getWordScore(element) > score) {
      score = getWordScore(element)
      word = element
    }
  })

  return word
}

console.log(high('d bb'))
