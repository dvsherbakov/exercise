//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

export function accum(s: string): string {
  return s
    .toLowerCase()
    .split('')
    .reduce(
      (prev, curr, idx) => [...prev, curr.toUpperCase() + curr.repeat(idx)],
      [],
    )
    .join('-')
}

console.log(accum('ZpglnRxqenU'))
