const balance2 = (left, right, r = left.replaceAll('!', '2').replaceAll('?', '3').split('').reduce((a, v) => (+v) + a, 0) -
right.replaceAll('!', '2').replaceAll('?', '3').split('').reduce((a, v) => (+v) + a, 0)) =>
  r === 0 ? 'Balance' : r < 0 ? 'Right' : 'Left'

const balance = (left, right) =>
  (fn => fn(left) > fn(right) ? `Left` : fn(left) < fn(right) ? `Right` : `Balance`)
  (str => [...str].reduce((pre, val) => pre + (val === `!` ? 2 : 3), 0))


console.log(balance('!!', '??'), 'Right')
console.log(balance('!??', '?!!'), 'Left')
console.log(balance('!?!!', '?!?'), 'Left')
console.log(balance('!!???!????', '??!!?!!!!!!!'), 'Balance')

// Each exclamation mark's weight is 2; each question Mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".