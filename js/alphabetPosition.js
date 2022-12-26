//Заменить числа их номерами в алфавите

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function alphabetPosition(text) {
  let res = [];
  for (const l of text.toUpperCase()) {
    const tmp = alphabet.indexOf(l.toUpperCase()) + 1;
    tmp > 0 && res.push(tmp.toString());
  }
  return res.join(' ');
}

const alphabetPosition1 = (text) => text.toUpperCase().split('').map(ch=>alphabet.indexOf(ch.toUpperCase()) + 1).filter(x=>x>0).join(' ')

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition1("The sunset sets at twelve o' clock."));
