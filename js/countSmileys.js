countSmileys = (arr) => arr.join('').match(/[;:][-~]?[\)D]/gm)?.length || 0


console.log(countSmileys([]), 0)
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4)
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2)
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1)

console.log(countSmileys([':(', ':o(', ';->', ':D', ':->']), 3)
console.log(countSmileys([':-)', ';~D', ':-D', ':_D']), 4)

//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.