const spacey = (src) => {
  const res = []
  src.reduce((acc, val)=>{
    res.push(acc+val)
    return acc+val
  }, '')
  return res
}

console.log(spacey(['kevin', 'has','no','space']), [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
console.log(spacey(['this','cheese','has','no','holes']), ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);