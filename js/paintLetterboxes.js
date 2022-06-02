const splitDigit = (num) => {
  return num
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => a - b);
};

var paintLetterboxes = function (start, end) {
  const res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = start; i <= end; i++) {
    const dgts = splitDigit(i);

    dgts.forEach((idx) => {
      res[idx]++;
    });
  }
  return res;
};

console.log(paintLetterboxes(125, 132));
