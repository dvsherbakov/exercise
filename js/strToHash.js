const strToHash = (str) =>
  str.split(', ').reduce((acc, itm) => {
    const [n, v] = itm.split('=');
    n && (acc[n] = +v);
    return acc;
  }, {});

console.log(strToHash(''));
