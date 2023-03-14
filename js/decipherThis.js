const decipherThis = (src) =>
  src.split(' ')
    .map(w => w.replace(parseInt(w).toString(), String.fromCharCode(parseInt(w))))
    .map(n => n.length > 2 ? n[0] + n[n.length - 1] + n.slice(2, n.length - 1) + n[1] : n)
    .join(' ')


console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do')
console.log(decipherThis('82yade 115te 103o'), 'Ready set go')