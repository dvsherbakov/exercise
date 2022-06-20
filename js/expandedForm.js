const expandedForm = num => num.toString()
    .split('')
    .reverse()
    .map((itm, idx) => itm * Math.pow(10, idx))
    .reverse()
    .filter(x => x > 0)
    .join(' + ')


console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');

