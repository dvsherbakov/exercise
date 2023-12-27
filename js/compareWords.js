const compare = (src) => {

    const spectrum = (str) => str.split('').reduce((acc, itm) => {
        acc[itm] = acc.hasOwnProperty(itm) ? ++acc[itm] : 1
        return acc
    }, {})

    const [w1, w2] = src.split(' ').map(item=>spectrum(item))
    let f = w1.keys().join('')===w2.keys().join('');
    for (let key in w1) {
        f = f&& w1[key]===w2[key]
    }
    return f
}

console.log(compare('oaoaoo oaoaoo'))