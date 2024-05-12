const mantissa = (src) => src - ~~src === 0 ? 0 : src.toString().split('.')[1].length
const borderCondition = (src, max) => max > 20 ? (src % 10 !== 0) : (src % 10 !== 0) && (src % 4 !== 0)

const fourDivide = (min, max) => {
  const pre = Math.min(mantissa(min), mantissa(max),2)
  let bMin = Math.ceil(min * (10 ** pre))
  let bMax = Math.ceil(max * (10 ** pre))
  while (borderCondition(bMin, max)) --bMin
  while (borderCondition(bMax, max)) ++bMax
  const dif = (bMax - bMin)
  const tic = Math.ceil(dif / (4)) / (10 ** pre)
  min = bMin / (10 ** pre)
  return { tic, min, max: Math.round((min+4*tic)*10000)/10000}
}


// console.log(mantissa(12.3654))
// console.log(mantissa(2.54))
// console.log(mantissa(4))

//console.log(fourDivide(3.62, 22.1))
//console.log(fourDivide(11, 14))
//console.log(fourDivide(0.21, 0.48))
//console.log(fourDivide(107, 408))

console.log(fourDivide(1.22, 1.29))
console.log(fourDivide(1.007, 1.009))
console.log(fourDivide(20.311, 20.316))
console.log(fourDivide(1, 107))
console.log(fourDivide(118, 134))
