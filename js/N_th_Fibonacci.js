function nthFibo(n) {
    let n1 = 0;
    let n2 = 1;
    if (n === 1) return n1;
    if (n === 2) return n2;
    let count = 2;
    while (count !== n) {
        const temp = n2;
        n2 += n1;
        n1 = temp;
        count++;
    }
    return n2;
}


const nthFibo2 = n =>
    Math.round(((1 + 5 ** .5) / 2) ** --n / 5 ** .5);

console.log(nthFibo2(4))