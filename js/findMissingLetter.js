
const findMissingLetter = (array) => String.fromCharCode(array.map(x=>x.charCodeAt(0)).filter((x, idx, arr)=>idx===0?false:x - (arr[idx-1])!==1).pop()-1);


console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.