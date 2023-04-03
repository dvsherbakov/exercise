const validParentheses = p => {
  let l = p.length, nl = 0, np = p
  while (l !== nl) {
    l = np.length
    np = np.replaceAll('()', '')
    nl = np.length
  }
  return np === ''
}


console.log(true, validParentheses(''))
console.log(true, validParentheses('()'))
console.log(true, validParentheses('((()))'))
console.log(true, validParentheses('()()()'))
console.log(true, validParentheses('(()())()'))
console.log(true, validParentheses('()(())((()))(())()'))

console.log(false, validParentheses(')('))
console.log(false, validParentheses('()()('))
console.log(false, validParentheses('((())'))
console.log(false, validParentheses('())(()'))
console.log(false, validParentheses(')()'))
console.log(false, validParentheses(')'))


