///Вернуть сумму всех квадратов

console.log(
  [1, 2, 3, 6].filter((x) => !(x % 2)).reduceRight((f, n) => f + n * n, 0)
);
