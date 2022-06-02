const encount = (str) => {
  const a = str.split('').reduce((acc, el) => {
    acc[el] = acc[el] ? ++acc[el] : (acc[el] = 1)
    return acc
  }, {})
  return Object.keys(a)
    .map((k) => k + a[k])
    .join('')
}

console.log(encount('werertytew'))
