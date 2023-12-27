function orderWeight(str) {
  function strSort(a, b) {
    function sumDigit(a) {
      return a.split('').reduce((acc, val) => acc + +val, 0);
    }

    return sumDigit(a) - sumDigit(b) || a.localeCompare(b);
  }

  return str
    .split(' ')
    .sort((a, b) => strSort(a, b))
    .join(' ');
}

console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'));
