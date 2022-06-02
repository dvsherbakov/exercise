function find(val) {
  function index(value) {
    return [1, 2, 3].indexOf(value);
  }

  return index(val);
}

var start = Date.now();

for (i = 0; i < 1000000; i++) {
  find(2);
}

console.log(Date.now() - start);
