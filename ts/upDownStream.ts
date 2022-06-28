export const time = (distance:number, boatSpeed:number, stream:String): number => {
    const [direct, speed] = stream.split(' ')
    return parseFloat((distance/(direct==='Downstream'?(boatSpeed+Number.parseInt(speed)):(boatSpeed-Number.parseInt(speed)))).toFixed(2))
};

console.log(time(24,10,"Downstream 2"),2);
console.log(time(24,14,"Upstream 2"),2);
console.log(time(54,28,"Downstream 3"),1.74);