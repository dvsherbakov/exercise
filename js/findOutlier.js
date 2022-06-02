//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//Найти четного или нечетного заслатого казачка

function isEven(arr) {
  let tmp = 0;
  for (const i of arr) {
    tmp += Math.abs(i % 2);
  }
  return tmp <= 1;
}

function findOutlier(integers) {
  return isEven(integers.slice(0, 3))
    ? integers.find((e) => e % 2)
    : integers.find((e) => !(e % 2));
}

//console.log([2, 6, 8, 10, 53].find((e) => e % 2));
console.log(isEven([99240091, 118694279, -185753017]));
console.log(
  findOutlier([
    99240091,
    118694279,
    -185753017,
    -64830929,
    -19386761,
    -106558566,
    -64221289,
    -20719719,
    79529259,
    117644543,
    -48817977,
    177133963,
    95142017,
    4413169,
    -83820509,
  ])
);
