// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable(seconds) {
  function twoDigStr(str) {
    return str.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });
  }
  return `${twoDigStr(Math.floor(seconds / 3600))}:${twoDigStr(
    Math.floor((seconds % 3600) / 60)
  )}:${twoDigStr(seconds % 60)}`;
}

console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(359999));
