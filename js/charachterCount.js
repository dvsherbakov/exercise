const count = str =>
  [...str].reduce((acc, val)=>{
    acc[val] ? acc[val]++: acc[val]=1;
    return acc;
  }, {})

const count2 = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

console.log(count2('aba'))

console.log(count('a'), {'a': 1});
console.log(count('ab'), {'a': 1, 'b': 1});
console.log(count('aba'), {'a': 2, 'b': 1});
console.log(count('ABC'), {'A': 1, 'B': 1, 'C': 1});

//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}