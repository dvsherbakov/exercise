const solution = (a) => (a && a.length ? a.sort((a, b) => a - b) : [])

console.log(solution([1, 2, 3, 10, 5]))
console.log(solution(null), [])
console.log(solution([20, 2, 10]), [2, 10, 20])
console.log(solution([2, 20, 10]), [2, 10, 20])
