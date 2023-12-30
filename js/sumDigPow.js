function sumDigPow(a, b) {
  return [...Array.from(Array(b - a).keys(), (x) => x + a)].filter(
    (cur) =>
      cur
        .toString()
        .split('')
        .reduce((acc, cur, idx) => acc + Math.pow(cur, idx + 1), 0) === cur
  );
}

console.log(sumDigPow(10, 150));
