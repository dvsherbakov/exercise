const isItANum = (s, sn = s.replace(/\D+/g, '')) => sn.length === 11 && sn[0] === '0' ? sn : 'Not a phone number'


console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
console.log(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
console.log(isItANum("0192387415456"), "Not a phone number");
console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165");
console.log(isItANum("stop calling me no I have never been in an accident"), "Not a phone number");
