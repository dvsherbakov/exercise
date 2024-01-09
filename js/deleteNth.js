const deleteNth = (arr, n)  => {
  const res = []
  arr.forEach(x=>{
    if (res.filter(y=>y===x).length<n) res.push(x)
  })
  return res
}
deleteNth2=(a,n)=>{a.reduce((o,e,i)=>(o[e]=o[e]+1||1,o[e]>n?a[i]='':null, o),{});return a.filter(e=>e)}

console.log(deleteNth([20,37,20,21], 1), [20,37,21])
console.log(deleteNth2([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.