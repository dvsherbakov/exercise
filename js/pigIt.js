function pigIt2(str) {
  [...str.matchAll(new RegExp(/\w+/, 'gm'))].reverse().forEach((x) => {
    str = str.slice(0, x.index) + x[0].slice(1) + x[0][0] + 'ay' + str.slice(x.index + x[0].length)
  })
  return str
}

function pigIt(str) {
  return str.replace(/\w+/g, (w) => w.slice(1) + w[0] + 'ay')
}

console.log(pigIt('Pig, latin is cool') === 'igPay, atinlay siay oolcay')
console.log(pigIt('This is my string') === 'hisTay siay ymay tringsay')