
function addingShifted (arr, shift) {
    const combineArrays = (a, b) => a.map((e, i) => e + b[i])
    return arr.reduce((acc, val, idx)=> combineArrays([...acc, ...new Array(shift).fill(0)], [...new Array(shift*(idx+1)).fill(0),...val])
        , arr.shift())
}

console.log('result:', addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]], 3))

expected = [ 1, 2, 3, 11, 12, 13, 7, 7, 7];
