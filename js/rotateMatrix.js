const rotateMatrix1 = arr => {
    const [width, height] = [arr[0].length, arr.length]
    const res = [];
    for (let i=0; i<width; i++){
        const row = []
        for (let j=0; j<height; j++) {
            row.push(arr[j][i])
        }
        res.push(row)
    }

    return res.reverse()
}

const rotateMatrix = arr =>
    arr[0].map((_, idx) => arr.map(val => val[idx])).reverse();

console.log(rotateMatrix([[-1,4,5],[2,3,4]]))