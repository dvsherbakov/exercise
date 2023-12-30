const longestRepetition = (s) => {
  const consequence = (m) => m.match(new RegExp(/([A-Za-z0-9])\1+/, 'g'))
  const longest = (arr, p) =>
    arr.sort((a, b) =>
      a.length === b.length ? p.indexOf(a) - p.indexOf(b) : b.length - a.length
    )[0]

  const res = s.length
    ? consequence(s) && consequence(s).length
      ? [longest(consequence(s), s)[0], longest(consequence(s), s).length]
      : [s[0], 1]
    : ['', 0]

  console.log(res)
  return res
}

console.log(
  longestRepetition(
    'x7owa3asa4mbgo3mh7v8ft8awajjn4kftuq5bqbszeqdtjgqf2f5dp3kk0kjtcvpweck7ve1i2jgjvw2lxpqkiq0llatsjx73gcevm4vtnocovxugipifiy1dyminzpozps4qnsr0joh8csbdlnffvctsevayrx2nhrwdpg7h580fvzzkjqmlx568yhvkhn5wevsrxvi7cn6ftygbgftv21426q66mu8h52dd88ipzc0rboefcsv0njt4dre9omdl85elgvsef8nxhlhiubrq37iyoac432n5r9u7abqyt6ckpvu1nqcf31eyswrez88us0d1yvl9kcp3z3y9orfghukkmc8r3plxvcdx2tpqj6pn4alu1i1yff0p81r0cd37mj1wqcsvnbq5q7ou1p8gncvwi77yxvtti8ykpevowxerhsmc11et4m7ro6e5z5jvbq8fdlluj3g01ov1z3nbqks7hpcy5sadow01xrnwv1yz9mea6a6'
  )
)
