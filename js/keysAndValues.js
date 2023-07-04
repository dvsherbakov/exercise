const keysAndValues = (obj) => [Object.keys(obj), Object.values(obj)]


console.log(keysAndValues({a: 1, b: 2, c: 3}), [['a', 'b', 'c'], [1, 2, 3]]);
console.log(keysAndValues({}), [[], []]);
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}), [['1', '2', '3'], ['a', 'b', 'c']]);