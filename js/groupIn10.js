function groupIn10s() {
    return [...arguments].reduce((acc, itm) => {
        const idx = ~~(itm / 10)
        acc[idx] = acc[idx] ? [...acc[idx], itm].sort((a, b) => a - b) : acc[idx] = [itm]
        return acc
    }, [])
}


console.log(groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50))
console.log(groupIn10s(12, 10, 11, 13, 25, 28, 29, 49, 51, 90))
console.log(groupIn10s(100))