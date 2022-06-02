export function basicOp(
  operation: string,
  value1: number,
  value2: number
): number {
  //switch (operation) {
  //  case '+':
  //    return value1 + value2
  //  case '-':
  //    return value1 - value2
  //  case '*':
  //    return value1 * value2
  //  case '/':
  //    return value1 / value2
  //  default:
  //    return 0
  //}
  return eval(value1 + operation + value2)
}

console.log(basicOp('/', 49, 7))
