//Заменить числа их номерами в алфавите

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function alphabetPosition(text) {
  let res = [];
  for (const l of text.toUpperCase()) {
    tmp = alphabet.indexOf(l.toUpperCase()) + 1;
    tmp > 0 && res.push(tmp.toString());
  }
  return res.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
