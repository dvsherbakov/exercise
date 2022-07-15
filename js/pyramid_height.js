const pyramidHeight = (n) => {
    let h = 0;
    while (n > 0) {
        h++
        n -= h * h
    }
    return n < 0 ? h - 1 : h
}

console.log(pyramidHeight(14))