// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(a1, a2) {
  return [
    ...new Set(
      a2.reduce(
        (res, cur, arr) => res.concat(a1.filter((val) => cur.includes(val))),
        []
      )
    ),
  ].sort();
}

a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
a1 = ['tarp', 'mice', 'bull'];
console.log(inArray(a1, a2));
