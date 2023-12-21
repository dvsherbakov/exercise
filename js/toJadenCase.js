String.prototype.toJadenCase = function() {
  return this.split(' ').map(x => x.replace(/./, c => c.toUpperCase())).join(' ')
}

console.log('How can \'mirrors be real\' if our eyes aren\'t real'.toJadenCase())
console.log('Jonah Hill Is a Genius'.toJadenCase())