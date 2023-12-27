function splitInteger(num, parts) {
  let res = Array.apply(null, Array(parts)).map(() => Math.floor(num / parts));
  for (let i = 0; i < num % parts; i++) {
    res[i]++;
  }
  return res;
}

console.log(splitInteger(20, 5).sort());
