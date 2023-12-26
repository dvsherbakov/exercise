function findUniq1(arr) {
  const inc = new Set()
  let can = new Set(arr)
  arr.forEach(x=>{
    if (inc.has(x)) {
      can.delete(x)
    }
    inc.add(x)
  })
  return can.values().next().value
}

const findUniq = (arr) =>  arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))


console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);

//There is an array with some numbers. All numbers are equal except for one. Try to find it!