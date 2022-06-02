function validatePin(pin: string): boolean {
  return /^\d{4}$|^\d{6}?$/.test(pin)
}

console.log(validatePin('1234567'))
