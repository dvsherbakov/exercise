function flattenR(arr) {
  return arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flattenR(cur) : cur),
    []
  );
}

function flatten(...args) {
  return flattenR(args);
}

console.log(flatten(1, [2, [3, 4, 6]], 4));
