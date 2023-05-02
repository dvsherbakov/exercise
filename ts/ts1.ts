interface Pupil {
  ID: string;
}
interface Adult {
  SSN: number;
}
interface Person {
  name: string;
  age: number;
}
let person: Pupil | Adult | Person = {
  name: 'Britney',
  age: 6
};
const getIdentifier = (person: Pupil | Adult | Person) => {
  if ('name' in person) {
    return person.name;
  }
  else if ('ID' in person) {
    return person.ID
  }
  return person.SSN;
}

console.log(getIdentifier(person))

interface Necklace{
  kind: string;
  brand: string;
}
interface bracelet{
  brand: string;
  year: number;
}
type Accessory = Necklace | bracelet;

const isNecklace = (b: Accessory): b is Necklace => {
  return (b as Necklace).kind !== undefined
}
const Necklace: Accessory = {kind: "Choker", brand: "TASAKI"};
const bracelet: Accessory = {brand: "Cartier", year: 2021};
console.log(isNecklace(bracelet))
console.log(isNecklace(Necklace))