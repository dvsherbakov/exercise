function findNb(m) {

    function* getRowsCount(count) {
        let curVal = count
        let row = 0
        while (curVal >= 0) {
            yield (curVal -= (Math.pow(++row, 3)))
        }
    }

    let list = [...getRowsCount(m)].filter(x => x >= 0).lastIndexOf(0)
    return list < 0 ? list : list + 1
}

console.log(findNb(4183059834009))