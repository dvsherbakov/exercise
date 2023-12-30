function add() {
    if (arguments.length > 1) {
        return arguments[0] + arguments[1]
    }
    const first = arguments[0]
    return function inner(second) {
        return first + second
    }
}


console.log(add(5, 2))
console.log(add(7)(2))
