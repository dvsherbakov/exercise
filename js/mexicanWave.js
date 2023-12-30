const wave = (str) => Array.apply(null, { length: str.length }).map(Function.call, () => str).map((x, idx) => x[idx].match( /\s/g) ? null: x.substring(0, idx) + x[idx].toUpperCase() + x.substring(idx + 1)).filter(x=>x!==null)

console.log(wave('two words'))
