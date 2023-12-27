



function tempToRgb(tmp, min=1000, max=40000) {
  const colorTemperatureToRGB = kelvin => {
    const clamp = (x, min = 0, max = 255) => Math.round(Math.min(Math.max(min, x), max))
    const temp = kelvin / 100

    let red, green, blue

    if (temp <= 66) {
      red = 255
      green = 99.4708025861 * Math.log(temp) - 161.1195681661
      if (temp <= 19) {
        blue = 0
      } else {
        blue = 138.5177312231 * Math.log(temp - 10) - 305.0447927307
      }
    } else {
      red = 329.698727446 * Math.pow(temp - 60, -0.1332047592)
      green = 288.1221695283 * Math.pow(temp - 60, -0.0755148492)
      blue = 255
    }

    return { r: clamp(red), g: clamp(green), b: clamp(blue) }
  }
  const d = 39000/(max-min);
  return colorTemperatureToRGB(1000+d*tmp);
}

//console.log(colorTemperatureToRGB(1200))
//console.log(colorTemperatureToRGB(9000))
//console.log(colorTemperatureToRGB(38000))

console.log(tempToRgb(450,12,450));
