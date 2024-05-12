function scramble2(str2, str1) {
  const s = new Set(str1)
  const d = new Set(str2)
  return s.reduce((acc, x)=>{
    if (d.indexOf(x)<0) return false
    else {
      (str2=str2.replace(x,''))
      return acc && true
    }
  }, true)
}

function scramble(str2, str1) {

  return s - d
}

// vconsole.log(scramble('rkqodlw',           'world'      ), true );
// console.log(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
// console.log(scramble('katas',             'steak'      ), false);
// console.log(scramble('scriptjavx',        'javascript' ), false);
// console.log(scramble('scriptingjava',     'javascript' ), true );
// console.log(scramble('scriptsjava',       'javascripts'), true );
// console.log(scramble('javscripts',        'javascript' ), false);
// console.log(scramble('jscripts',          'javascript' ), false);
// console.log(scramble('aabbcamaomsccdd',   'commas'     ), true );
// console.log(scramble('commas',            'commas'     ), true );
// console.log(scramble('sammoc',            'commas'     ), true )

 console.log('sdsdf')
let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
let s2 = "zyxcba".repeat(9_000);
console.log(scramble(s1, s2), true);