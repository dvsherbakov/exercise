const removeConsecutiveDuplicates = s => {
  const [arr, res, ] = [s.split(' '), []]
  let prev = '';
  for (let w of arr) {
    if (w!==prev) {
      res.push(w)
      prev = w
    }
  }
  return res.join(' ');
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))