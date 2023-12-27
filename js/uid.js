const getUid = () => 
     'idxxxx-xxxx'.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16));
     
function getUid1() { return crypto.getRandomValues(new Uint32Array(1))[0].toString(16) }

const getUid2 = () => crypto.getRandomValues(new BigUint64Array(1))[0].toString(16)

const getUid3 = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
      .toString(16)
      .padStart(14, '0');

console.log(getUid1())