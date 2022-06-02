const add = (a, b) => {
  const [c, d] =
    a.length > b.length
      ? [a.split(''), b.split('')]
      : [b.split(''), a.split('')];
  let of = 0;
  let res = [];
  while (c.length) {
    const [f, s] = [+c.pop(), +d.pop() || 0];
    const tmp = f + s + of;
    res.push(tmp % 10);
    of = Math.floor(tmp / 10);
  }
  of && res.push(of);

  return res.reverse().join('');
};

console.log(add('101', '100'));
