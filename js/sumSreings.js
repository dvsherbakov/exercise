function sumStrings2(str1, str2) {
  let sum = '';

  let str1Length = str1.length;
  let str2Length = str2.length;

  if (str2Length > str1Length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let carry = 0;
  let a;
  let b;
  let temp;
  let digitSum;
  for (let i = 0; i < str1.length; i++) {
    a = parseInt(str1.charAt(str1.length - 1 - i));
    b = parseInt(str2.charAt(str2.length - 1 - i));
    b = b ? b : 0;
    temp = (carry + a + b).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;

    sum = i === str1.length - 1 ? temp + sum : digitSum + sum;
  }

  return sum;
}

function sumStrings(a, b) {
  const res = [];
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  let c = 0;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const a_ = a.length > i ? parseInt(a[i]) : 0;
    const b_ = b.length > i ? parseInt(b[i]) : 0;
    let sum = a_ + b_ + c;
    c = Math.floor(sum / 10);
    if (c !== 0) {
      sum = sum % 10;
    }
    res.push(String(sum));
  }
  if (c > 0) {
    res.push(c);
  }
  return res.reverse().join('').replace(/^0+/, '');
}

console.log(
  //sumStrings('712569312664357328695151392', '8100824045303269669937')
  sumStrings('00103', '08567')
);
//712577413488402631964821329
