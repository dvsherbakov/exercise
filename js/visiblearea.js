var a = 10
function test() {
  console.log(a)
  var a = 11
}

//test()

function getAnswer() {
  let answer = 42

  return function () {
    console.log(answer)
    answer += 2
  }
}

const ans = getAnswer()
//ans()

function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args)
  }
}

let user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`)
  },
}

user.sayNow = partial(
  user.say,
  new Date().getHours() + ':' + new Date().getMinutes()
)

//user.sayNow('Hello')

function f() {
  console.log(this)
}

let person = {
  g: f.bind(null),
}

//person.g()

function f() {
  console.log(this.name)
}

f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' })

//f()

function sayHi() {
  console.log(this.name)
}
sayHi.test = 5

let bound = sayHi.bind({
  name: 'Вася',
})

//console.log(bound.test)

let animal = {
  eats: true,
  walk() {
    console.log('Animal walk')
  },
}
let rabbit = {
  jumps: true,
}

rabbit.__proto__ = animal

console.log(rabbit.eats)
console.log(rabbit.jumps)
rabbit.walk()
