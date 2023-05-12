class Dictionary {
  newEntry(key, value) {
    this[key] = value
  }

  look(key) {
    return this[key] || `Can't find entry for ${key}`
  }
}

const
  d = new Dictionary
d
  .newEntry(
    'Apple'
    ,
    'A fruit',
  )

console.log(d.look('Apple',),'A fruit')
console.log(d.look('Ball'), 'Can\'t find entry for Ball')