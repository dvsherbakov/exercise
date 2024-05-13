const mantissa = (src) => src - ~~src === 0 ? 0 : src.toString().split('.')[1].length
const borderCondition = (src, max) => max > 20 ? !((src % 10 === 0) || (src % 5 === 0)) : !((src % 5 === 0) || (src % 2 === 0))

const fourDivide = (min, max) => {
  const pre = Math.max(mantissa(min), mantissa(max))
  let bMin = Math.ceil(min * (10 ** pre))
  let bMax = Math.ceil(max * (10 ** pre))
  while (borderCondition(bMin, max)) --bMin
  //while (borderCondition(bMax, max)) ++bMax
  const dif = (bMax - bMin)
  let tic = Math.floor(dif / (4))
  if (tic > 2) while (tic % 5 !== 0) ++tic
  if (bMax>(bMin + 4 * tic)) {
    tic = Math.ceil(dif / (4))
    if (tic > 3) while (tic % 5 !== 0) ++tic
  }

  tic = tic / (10 ** pre)
  min = bMin / (10 ** pre)
  //max = bMax / (10 ** pre)
  return { tic, min, max:Math.round((min + 4 * tic) * 10000) / 10000 }
}


// console.log(mantissa(12.3654))
// console.log(mantissa(2.54))
// console.log(mantissa(4))


console.log(9.9,10, fourDivide(9.9,10))
console.log(3.62, 22.1, fourDivide(3.62, 22.1))
console.log(11, 14, fourDivide(11, 14))
console.log(0.21, 0.48, fourDivide(0.21, 0.48))
console.log(107, 408, fourDivide(107, 408))

console.log(1.22, 1.29, fourDivide(1.22, 1.29))
console.log(1.007, 1.009, fourDivide(1.007, 1.009))
console.log(20.311, 20.316, fourDivide(20.311, 20.316))
console.log(1, 107, fourDivide(1, 107))
console.log(118, 134, fourDivide(118, 134))
