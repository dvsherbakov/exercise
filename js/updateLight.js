function updateLight(current) {
  const colors = ["green", "yellow", "red"]
  const idx = colors.findIndex(val => current===val)
  console.log(idx)
  return idx<0||idx>=2?colors[0]:colors[idx+1]
}

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");