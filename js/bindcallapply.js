function f(arg) {
  console.log(arguments)
  console.log(this.a)
}

var a = 1010101

f('abc')
console.log('---')
f.call({ a: '123' }, 'abc')

console.log('____')
f.apply({ a: 'apply' }, [1, 2, 3, 4])

console.log('---')
const t = f.bind({ a: 'bind' })
t('bbb')
