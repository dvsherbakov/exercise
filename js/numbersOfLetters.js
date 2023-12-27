function numbersOfLetters(src) {
    const inWords = nmb => {
        const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        //return nmb < 10 ? digits[nmb] : inWords(~~(nmb / 10)) + inWords(nmb % 10)
        return nmb.toString().split('').map(x => digits[+x]).join('')
    }
    const res = []
    let stable = false
    while (!stable) {
        let tmp = inWords(src)
        res.push(tmp)
        stable = tmp.length === src
        src = tmp.length
    }

    return res
}

console.log(numbersOfLetters(999))