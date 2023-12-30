// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers

var maxSequence = function (arr) {
  let mSum = 0;
  let pSum = 0;

  for (let item of arr) {
    pSum += item;
    mSum = Math.max(mSum, pSum);
    if (pSum < 0) pSum = 0;
  }

  return mSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
