//The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
//But some of the rats are deaf and are going the wrong way!

const countDeafRats1 = function (town) {
    let i = 0, res = 0
    const piperPos = town.indexOf('P')
    while (i < town.length - 1) {
        if (town[i] === '~') {
            if (i > piperPos) res++
            i += 2
        } else if (town[i] === 'O') {
            if (i < piperPos) res++
            i += 2
        } else {
            i++
        }
    }

    return res;
}

const countDeafRats = town => [...town.replace(/ +/g, '')].reduce((a, c, i) => a + (i % 2 === 0 && c === 'O'), 0);


console.log(countDeafRats("~O~O~O~O P"))
console.log(countDeafRats("P O~ O~ ~O O~"))
console.log(countDeafRats1("~O~O~O~OP~O~OO~"))

const d = false;
const df = d ?? 54
console.log(df)