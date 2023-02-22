const wordsToMarks = (src, ab=' abcdefghijklmnopqrstuvwxyz') => src.split('').reduce((acc, ch)=> acc+ab.indexOf(ch), 0)


console.log(wordsToMarks("attitude"), wordsToMarks("friends"), wordsToMarks("selfness"))