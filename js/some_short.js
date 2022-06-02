//Некоторые упрощения кода

const dynamic = 'engine';
const car = { name: 'Mazda', [dynamic]: 2.0 };

const cond = false;

const sayHello = () => {
  console.log('hello');
};
cond && sayHello();

console.log('Javascript javascript'.replace(/java/gi, 'type'));

const ar = [1, 5, 4, 2, 5, 7, 9, 6, 4, 3, 0, 3, 11, 14, 13, 8, 0, 20, 10];
const un_arr = [...new Set(ar)];

console.log(un_arr.sort((a, b) => a - b));
console.log(un_arr.sort(() => Math.random() - 0.5));
