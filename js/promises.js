async function ft1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: 'Ok' })
    }, 1000)
  })
}

async function f2() {
  const pdata = await ft1()
  console.log(pdata)
  return pdata
}

console.log('result: ', f2())
//f1().then(({ status, data }) => console.log(status, data))

//console.log(f2())

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

async function f1() {
  var x = await resolveAfter2Seconds(10)
  console.log(x) // 10
}
f1()
