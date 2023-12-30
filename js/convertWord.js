function convert(s) {
  console.log(s);
  if (!s.length) return 0;
  const tmp = [...s.toUpperCase()].reduce((acc, cur) => {
    if (!acc.hasOwnProperty(cur)) {
      acc[cur] = Object.keys(acc).length;
    }
    return acc;
  }, {});

  if (Object.keys(tmp).length > 1) {
    [tmp[Object.keys(tmp)[0]], tmp[Object.keys(tmp)[1]]] = [
      tmp[Object.keys(tmp)[1]],
      tmp[Object.keys(tmp)[0]],
    ];
  } else tmp[Object.keys(tmp)[0]] = 1;

  return +[...s.toUpperCase()].map((x) => tmp[x]).join('');
}

console.log(convert('INxQfguLauFgUFL'));
console.log('102345678645647');
