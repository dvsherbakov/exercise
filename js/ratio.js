const findScreenHeight = (width, ratio) => {
  const [x,y] = ratio.split(':').map(x=>+x)
  return `${width}x${width/x*y}`
}

console.log(findScreenHeight(1024,"4:3"), "1024x768")
console.log(findScreenHeight(1280,"16:9"), "1280x720")
console.log(findScreenHeight(3840,"32:9"), "3840x1080")