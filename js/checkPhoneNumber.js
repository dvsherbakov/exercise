function checkPhoneNumber(phoneBook, phoneNumber) {
  const ph = (+phoneNumber.replace(/[^\d;]/g, '')).toString()
  return phoneBook
    .map((e) => (+e.replace(/[^\d;]/g, '')).toString())
    .every((x) => {
      const ln = Math.min(x.length, ph.length)
      console.log(x, ph, x.slice(-ln) === ph.slice(-ln))
      return x.slice(-ln) !== ph.slice(-ln)
    })
}

console.log(
  checkPhoneNumber(
    [
      '+49(0)890-3 8 5-6 50',
      '0049(0)890 602-1 4-4',
      '0(89)28-7 01-7 7',
      '0(89)01 773-7-4',
    ],
    '+00498903 856-5 0'
  )
)
