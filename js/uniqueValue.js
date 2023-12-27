Array.prototype.getUnique = function () {
    return this.filter((value, idx, self) => self.indexOf(value) === idx)
}

Array.prototype.onlyUnique = function () {

    const hash = this.reduce((acc, val) => {
        if (acc.hasOwnProperty(val)) {
            acc[val]++
        } else {
            acc[val] = 1
        }
        return acc;
    }, {})

    return Object.keys(hash).reduce((ac, cur) =>
            hash[cur] === 1 ? [...ac, cur] : ac
        , []);

}

console.log(['one', 'two', 'one'].onlyUnique())
console.log(['one', 'two', 'one'].getUnique())