const moveZeros = (arr, nc = 0) => {
 return arr.filter(x=>{
   if (x===0) {
     nc++
     return false
   }
   return true
 }).concat(Array(nc).fill(0))
}

const moveZeros2 = (arr) => arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
console.log(moveZeros2([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])

//Write an algorithm that takes an array and moves all the zeros to the end, preserving the order of the other elements.