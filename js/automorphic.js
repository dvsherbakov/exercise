const automorphic = (n) =>
  (n * n).toString().indexOf(n) >= 0 ? 'Automorphic' : 'Not!!'

console.log(automorphic(25))

//console.log(add(5, -4))
