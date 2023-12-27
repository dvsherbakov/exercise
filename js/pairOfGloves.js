const numberOfPairs = (list, tmp = []) => {
    list.reduce((acc, itm) => acc.set(itm, acc.get(itm) ? acc.get(itm) + 1 : 1), new Map())
        .forEach(value => tmp.push(value))
    return tmp.reduce((acc, itm) => acc + Math.trunc(itm / 2), 0)
}

const input = ['gray','black','purple','purple','gray','black']
console.log(numberOfPairs(input))