const fish = arr => {
  const m = arr.reduce((acc, itm) => acc.set(itm, acc.get(itm) ? acc.get(itm) + 1 : 1), new Map())
    if ((new Set(m.values())).size>1 && Math.min(...m.values())<Math.max(...m.values())) {
      const pre =  [...m.entries()]
        .filter(({ 1: v }) => v === Math.min(...m.values())).map(([k]) => k)
      if (pre.length===1 && pre%2!==0) return pre[0]
    }
    return "no catch"
}

console.log(fish([ 1, 1, 1, 'red herring', 1 ]))
  console.log(fish([ 'red herring', 'red herring', 'red herring' ]))
  console.log(fish([ 'red herring', 'blue herring', 'yellow herring' ]))
  console.log(fish([ 1, 2, 1, 2 ]))
  console.log(fish([ 1, 2, 3, 4 ]))
  console.log(fish([ 1, 2, 1, 1 ]))
  console.log(fish([ 'red herring' ]))
  console.log(fish([ '1', '1', 1, '1' ]))
  console.log(fish([ 1, 1, 1, '1' ]))
  console.log(fish([ '1', '1', 1, 2 ]))