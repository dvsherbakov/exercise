const fourDivide = (min, max, ) => {
  const mantissa = (src) => (src - ~~src === 0 ? 0 : src.toString().split('.')[1].length);

  const pre = Math.max(mantissa(min), mantissa(max));
  const minTic = 1 / 10 ** pre;
  if (max - min < minTic / 100) {
    return { minCaption: min - minTic, maxCaption: min + minTic, middleCaption: min };
  }

  let bMin = Math.ceil(min * 10 ** pre);
  const bMax = Math.ceil(max * 10 ** pre);
  const pwr = Math.log10(max);

  while (!(bMin % 10 ** Math.floor(pre + pwr - 1) === 0)) --bMin;
  const dif = bMax - bMin;
  let tic = Math.floor(dif / 4);
  while (tic % 10 ** Math.max(Math.floor(pre + pwr)-2, 0) !== 0) ++tic;
  if (bMax > bMin + 4 * tic) {
    tic = Math.ceil(dif / 4);
    while (tic % 10 ** Math.max(Math.floor(pre + pwr)-2, 0) !== 0) ++tic;
  }
  min = bMin / 10 ** pre;
  tic = tic / 10 ** pre;
  return {tic, minCaption: min, maxCaption: Math.round((min + 4 * tic) * 10000) / 10000, middleCaption: Math.round((min + 2 * tic) * 10000) / 10000 };
};


console.log(9.9, 10, fourDivide(9.9, 10))
console.log(3.62, 22.1, fourDivide(3.62, 22.1))
console.log(11, 14, fourDivide(11, 14))
console.log(0.21, 0.48, fourDivide(0.21, 0.48))
console.log(107, 408, fourDivide(107, 408))

console.log(1.230, 1.299, fourDivide(1.230, 1.299))
console.log(1.22, 1.29, fourDivide(1.22, 1.29))
console.log(1.007, 1.009, fourDivide(1.007, 1.009))
console.log(20.311, 20.316, fourDivide(20.311, 20.316))
console.log(1, 107, fourDivide(1, 107))
console.log(118, 134, fourDivide(118, 134))
console.log(9.9, 11, fourDivide(9.9, 11))
console.log(0, 21, fourDivide(0, 21))
