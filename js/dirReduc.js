//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
  function fb(a, b) {
    return (
      (a === 'NORTH' && b === 'SOUTH') ||
      (a === 'SOUTH' && b === 'NORTH') ||
      (a === 'EAST' && b === 'WEST') ||
      (a === 'WEST' && b === 'EAST')
    );
  }
  let idx = [];
  for (let i = 1; i < arr.length; i++) {
    if (fb(arr[i - 1], arr[i])) {
      idx = idx.concat([i - 1, i]);
      i++;
    }
  }
  let res = arr.filter((_, id) => !idx.includes(id));
  if (res.length !== arr.length) res = dirReduc(res);
  return res;
}

//const dirReduc = arr =>
//arr.reduce((pre, val) => pre[pre.length - 1] === {NORTH : `SOUTH`, SOUTH : `NORTH`, EAST : `WEST`, WEST : `EAST`}[val] ? pre.slice(0, -1) : [...pre, val], []);

console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']));
