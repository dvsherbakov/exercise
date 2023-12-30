const getMilitaryTime = input => {
  const r = new RegExp(/^([1-9]|0[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9])([AaPp][Mm])$/, 'gm')
  const [[, hh, mm, ss, pmoram]] = [...input.matchAll(r)]
  if (input === '12:00:00PM') return '00:00:00'
  if (+hh >= 1 && +hh < 12 && pmoram === 'PM') {
    return String(+hh + 12).padStart(2, '0') + ':' + String(mm).padStart(2, '0') + ':' + String(ss).padStart(2, '0')
  } else if (+hh >= 12 && pmoram === 'AM') {
    return String(+hh - 12).padStart(2, '0') + ':' + String(mm).padStart(2, '0') + ':' + String(ss).padStart(2, '0')
  }
  return hh.padStart(2, '0') + ':' + mm + ':' + ss
}


console.log(getMilitaryTime('12:00:01AM'), '00:00:01')
console.log(getMilitaryTime('12:00:00AM'), '00:00:00')
console.log(getMilitaryTime('12:00:00PM'), '00:00:00')
console.log(getMilitaryTime('11:46:47PM'), '23:46:47')