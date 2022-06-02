// https://www.codewars.com/kata/578b8c0e84ac69a4d20004c8/train/typescript

export function runningPace(distance: number, time: string): string {
  const tc: number = Math.floor(
    time
      .split(':')
      .reverse()
      .reduce(
        (acc: number, cur: string, idx) =>
          (acc += +cur * (idx > 0 ? idx * 60 : 1)),
        0
      ) / distance
  )
  return `${Math.floor(tc / 60)}:${tc % 60 > 9 ? tc % 60 : '0' + (tc % 60)}`
}

console.log(runningPace(4.99, '22:32'))
