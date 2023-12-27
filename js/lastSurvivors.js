function lastSurvivors(str) {
  const replaceCymbols = (str, sym) => {
    let res = str;
    for (const itm of sym) {
      const newChar = String.fromCharCode(
        ((itm.charCodeAt(0) + 1 - 'a'.charCodeAt(0)) % 26) + 'a'.charCodeAt(0)
      );
      res = res.replace(itm, newChar).replace(itm, '');
    }
    return res;
  };

  const repeatSet = str
    .split('')
    .reduce(
      (acc, curr, idx, arr) =>
        idx !== arr.lastIndexOf(curr) ? acc.add(curr) : acc,
      new Set()
    );
  return repeatSet.size === 0
    ? str
    : lastSurvivors(replaceCymbols(str, repeatSet));
}

console.log(lastSurvivors('zzzab'));

//console.log(replaceCymbols('abxzbac', lastSurvivors('abxzbac')));
