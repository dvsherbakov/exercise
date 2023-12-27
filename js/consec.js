const sumGroups = (arr) => {
    const res = []
    let found = false;
    let tmp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] + arr[i - 1]) % 2 !== 0) {
            res.push(tmp)
            tmp = arr[i]
        } else {
            found = true;
            tmp += arr[i]
        }
    }
    res.push(tmp)
    return found ? sumGroups(res) : res.length
}

console.log(sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]))