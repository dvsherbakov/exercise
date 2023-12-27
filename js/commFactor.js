const scf = (arr) => {
  const res = Array.from(Array(Math.floor(Math.max(...arr, 1) / 2)).keys())
    .map((e) => e + 2)
    .map((itm) => (arr.every((e) => e % itm === 0) ? itm : 0))
    .filter((x) => x > 1)
  return res.length > 0 ? res[0] : 1
}

console.log(
  scf([
    2256, 14288, 15040, 7520, 6016, 13536, 15040, 6768, 3760, 9776, 3760, 3008,
    4512, 12032, 8272, 10528, 12032, 4512, 12032, 12784,
  ])
)
//console.log(scf([]))
