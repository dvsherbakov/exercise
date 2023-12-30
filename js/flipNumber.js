const flipNumber1 = str =>
{
  for (let i=0; i<str.length; i++){
    str = str.slice(0,i)+ [...str.slice(i)].reverse().join('')
  }
  return str
}

const flipNumber = str => [...str].reduce((acc, _, i)=> acc.slice(0,i)+ [...acc.slice(i)].reverse().join(''), str)

console.log(flipNumber("012"),"201");
console.log(flipNumber("012345"),"504132");
console.log(flipNumber("0123456789"),"9081726354");