function XO1(str) {
  return str.toUpperCase().replace(/[^+X]/g, '').length === str.toUpperCase().replace(/[^+O]/g, '').length
}

const XO = (str) => str.toUpperCase().replace(/[^+X]/g, '').length === str.toUpperCase().replace(/[^+O]/g, '').length

console.log(XO('xo'), true)
console.log(XO('xxOo'), true)
console.log(XO('xxxm'), false)
console.log(XO('Oo'), false)
console.log(XO('ooom'), false)