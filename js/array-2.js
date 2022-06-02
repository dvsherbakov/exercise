//Вернуть массив без указанных значений

const arr = [1, 8, 4, 5, 3, 4, 1, 3];

const without = (a, ...args) => {
  return [...new Set(a.filter((x) => !args.includes(x)))];
};

console.log(without(arr, 1, 4, 2));
