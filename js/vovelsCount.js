function getCount(str) {
  return str
    .toLowerCase()
    .split('')
    .filter((x) => ['a', 'e', 'i', 'o', 'u'].indexOf(x) >= 0).length;
}

console.log(getCount('abracadabra'));
