const reverseSeq1 = n => Array.from(Array(n).keys()).map(x=>n-x);

const reverseSeq = length => Array.from({length}, () => length--)

console.log(reverseSeq( 5))