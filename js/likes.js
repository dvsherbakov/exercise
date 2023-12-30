const likes = (names) => {
  switch (names.length) {
    case 0: return  'no one likes this'
    case 1: return `${names[0]} likes this`
    case 2: return `${names.join(' and ')} like this`
    case 3: return `${names.splice(0, 2).join(', ')} and ${names[0]} like this`
    default: return `${names.splice(0, 2).join(', ')} and ${names.length} others like this`
  }
}


console.log(likes([]) === 'no one likes this');
console.log(likes(['Peter']) === 'Peter likes this');
console.log(likes(['Jacob', 'Alex']) === 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']) === 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']) === 'Alex, Jacob and 2 others like this');