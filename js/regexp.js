const checkName = (name) => !name.match(/[#%&{}\\\/+`|=<>*?$!'":@]/g)

const CheckFileNames = (names) =>
  names.reduce(
    (acc, name) => {
      if (checkName(name)) acc.correct = [...acc.correct, name]
      else acc.errors = [...acc.errors, name]
      return acc
    },
    { correct: [], errors: [] }
  )

console.log(CheckFileNames(['able.txt', 'for%tine.abc', 'base+oi.psp']))
