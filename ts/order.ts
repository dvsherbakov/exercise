export function order(words: string): string {
  return words
    .split(' ')
    .sort((a, b) => +a.replace(/\D+/g, '') - +b.replace(/\D+/g, ''))
    .join(' ')
}

console.log(order('is2 Thi1s T4est 3a'))
