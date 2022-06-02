const brackets = (str) => {
  const isOpen = (ch) => ['[', '{', '('].includes(ch)

  const stack = []
  const pair = {
    '}': '{',
    ')': '(',
    ']': '[',
  }

  for (i = 0; i < str.length; i++) {
    const element = str[i]
    if (isOpen(element)) stack.push(element)
    else if (pair[element] !== stack.pop()) return false
  }

  return !stack.length
}

console.log(brackets('{([)]({})}'))
