const titleToNumber = title => [...title.toUpperCase()].reverse().map(x=>x.charCodeAt(0)-64).reduce((s,v,i)=>s+(v*26**i),0)

console.log(titleToNumber('A'),1);
console.log(titleToNumber('Z'),26);
console.log(titleToNumber('AA'),27);
console.log(titleToNumber('AZ'),52);
console.log(titleToNumber('BA'),53);
console.log(titleToNumber('CODEWARS'),28779382963);