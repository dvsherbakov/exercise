const mean = (lst, h = lst.filter(x=>/^\d$/.test(x)), t = lst.filter(x=>!(/^\d$/.test(x))).join('')) =>  [h.reduce((a, y)=>a+(+y),0)/h.length, t]


console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]));
console.log(mean(["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"]));

