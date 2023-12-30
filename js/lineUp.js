const parseLine = (arr) => {
    let pair = arr.map(line => {
        const words = line.split(' ')
        return words[5] === 'left' ? [words[2], words[0]] : [words[0], words[2]]
    })
    while (pair.length > 1) {
        for (let i = 1; i < pair.length; i++) {
            if (pair[0][0] === pair[i][pair[i].length - 1]) {
                pair[0] = [...pair[i], ...pair[0].slice(1)]
                pair.splice(i, 1)
                break
            }
            if (pair[0][pair[0].length - 1] === pair[i][0]) {
                pair[0] = [...pair[i].slice(1), ...pair[0]]
                pair.splice(i, 1)
                break
            }
        }
    }
    return pair[0]
}

console.log(parseLine(["white has black on his left",
    "red has green on his right",
    "black has green on his left"]))