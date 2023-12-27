const longest = (a,b) => Array.from(new Set(a+b)).sort().join('')

console.log(longest('asdfasdfasdfasdf','klhkjvbxvznbxvcnb'))


// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.