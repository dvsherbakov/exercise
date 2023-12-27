function abbrevName(name) {
  return name
    .split(' ')
    .map((w) => w[0].toUpperCase())
    .join('.');
}
const abbrevName2 = (name) => name.match(/\b\w/g).join('.').toUpperCase();

console.log(abbrevName2('Dmitry Sherbakovb'));
