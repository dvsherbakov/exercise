function topThreeWords(text) {
  const wArray = text
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/\//g, '')
    .split('\n')
    .join(' ')
    .split(', ')
    .join(' ')
    .split(' ')
    .sort()
    .filter(function(el) {
      return el != null && el !== '' && el !== '\''
    })
  const wList = []
  const wCount = []
  for (let i = 0; i < wArray.length; i++) {
    if (wArray[i] !== wArray[i - 1]) {
      wList.push(wArray[i])
      wCount.push(1)
    } else {
      wCount[wCount.length - 1]++
    }
  }
  let frequencies = wCount.slice(0, wCount.length)
  frequencies = frequencies.sort((a, b) => b - a)
  const mostFrequent = []
  if (frequencies.length > 0) {
    mostFrequent.push(wList[wCount.indexOf(frequencies[0])])
  }
  if (frequencies.length > 1 && frequencies[1] === frequencies[0]) {
    mostFrequent.push(wList[wCount.lastIndexOf(frequencies[1])])
  }
  if (frequencies.length > 1 && frequencies[1] !== frequencies[0]) {
    mostFrequent.push(wList[wCount.indexOf(frequencies[1])])
  }
  if (frequencies.length > 2 && frequencies[2] === frequencies[1]) {
    mostFrequent.push(wList[wCount.lastIndexOf(frequencies[2])])
  }
  if (frequencies.length > 2 && frequencies[2] !== frequencies[1]) {
    mostFrequent.push(wList[wCount.indexOf(frequencies[2])])
  }
  return mostFrequent
}

let topThreeWords2 = text => {
  let dict = new Map()
  text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
    let word = match.toLowerCase()
    dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1)
  })
  dict.delete('\'')
  return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3)
}

console.log(topThreeWords2('  , e   .. '))

//https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript