const smArr: any[] = [1, 'str', false]

const for_in = (arr: any[]) => {
  for (let i in arr) {
    console.log(i)
  }
}

function* generateSequence() {
  yield 1
  yield 2
  return 3
}

const gen = generateSequence()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

for (let value of gen) {
  console.log(value)
}

//npx ts-node test/queries.ts
