function tickets(peopleInLine) {
  const selfCoin = [];
  let have = true;
  for (let c of peopleInLine) {
    if (c !== 25) {
    }
    selfCoin.push(c);
  }
  return "YES";
}

console.log(tickets([25, 25, 50, 50]));
