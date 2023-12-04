//Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

const arr = [0, 1, false, 2, undefined, '', 3, null, 'latest'];

console.log(arr);

const clear = (el) => el === 0 ? true : el === true ? false : !!el === false ? false : true;

console.log(arr.filter((x) => clear(x)));
