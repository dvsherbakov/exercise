const sum = (digits) => {
  if (!digits || typeof digits === 'undefined') return ''
  const arr = digits.split('').map((e) => +e)
  return `${arr.join(' + ')} = ${arr.reduce((acc, cur) => acc + cur, 0)}`
}

console.log(sum(0))
