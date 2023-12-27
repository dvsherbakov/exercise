function runningPace(distance, time) {
    const tmp = time.split(':').reverse().reduce((acc, itm, idx) => acc + itm * Math.pow(60, idx), 0) / distance
    return `${~~(tmp / 60)}:${Math.floor(tmp % 60).toString().padStart(2, "0")}`
}

console.log(runningPace(1, "3:15"), "3:15");
console.log(runningPace(5, "25:00"), "5:00");
console.log(runningPace(15, "75:00"), "5:00");
console.log(runningPace(2.51, "10:43"), "4:16");
console.log(runningPace(4.99, "22:32"), "4:30");
console.log(runningPace(0.2, "0:38"), "3:10");
console.log(runningPace(42.195, "122:57"), "2:54");