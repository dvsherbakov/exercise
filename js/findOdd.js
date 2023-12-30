function findOdd(A) {
  const lenArr = A.map((x) => A.filter((p) => p === x).length);
  return A[lenArr.indexOf(lenArr.filter((m) => m % 2)[0])];
}

console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
