const g = 9.81

const maxBall = (v0) => {
  const convert = (v) => (v * 5) / 18
  const vt = (v, t) => v - g * t
  const ht = (v, t) => v * t - g * t * t * 0.5

  let v = convert(v0)
  let h = 0
  let t = 0
  console.log(v)
  while (vt(v, t) >= 0) {
    h = ht(v, t)
    console.log(h, vt(v, t))
    t = t + 0.1
  }

  return Math.abs(~~h)
}

console.log(maxBall(37))
