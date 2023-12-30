const solve = (arr) =>
    arr.map(word => [...word.toUpperCase()].reduce((acc, ch, idx) => ch.charCodeAt(0) - 65 === idx ? ++acc : acc, 0))


console.log(solve(["encode", "abc", "xyzD", "ABmD"]))