const  filter_list = (l) => l.filter(x=>(typeof x) === "number")


console.log(filter_list([1,2,'a','b']),[1,2])
console.log(filter_list([1,'a','b',0,15]),[1,0,15])