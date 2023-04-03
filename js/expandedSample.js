const expandedSample = (arr, min, max) =>
   arr.filter(itm => itm >= arr.filter(x => x < min).pop() && itm <= arr.filter(x => x > max)[0])




const src = [52, 49, 25, 36, 48, 76, 61, 33, 55, 24, 11, 9, 23, 16, 109, 88].sort((a, b) => a - b)
console.log(src)
console.log(expandedSample(src, 25, 60))