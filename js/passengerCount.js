const  number = (busStops) => busStops.reduce((a,x)=>a+x[0]-x[1],0)

console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);

//There is a bus moving in the city which takes and drops some people at each bus stop.