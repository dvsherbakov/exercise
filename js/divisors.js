const divisors = (n) => {
  const res = new Set()
  for (let i=2; i*i<=n; i++) {
    if (n%i===0) { 
      res.add(i)
      res.add(n/i)
    }
  }
  return res.size ? Array.from(res).sort((a,b)=>a-b) : `${n} is prime`
}


console.log(divisors(15), [3, 5]);
console.log(divisors(24));
console.log(divisors(49));
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");

// returns an array with all the integer's divisors