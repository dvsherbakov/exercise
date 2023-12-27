class Dictionary {

  static sData = ['poder', 'noder', 42]
  constructor() {
    this.pData = ['login', 42, false, null]
  }

  static testThis() {
    console.log(this.sData)
  }

  newEntry(key, value) {
    this[key] = value
  }

  look(key) {
    return this[key] || `Can't find entry for ${key}`
  }
}

Dictionary.testThis()

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
console.log(d.pData, Dictionary.sData)