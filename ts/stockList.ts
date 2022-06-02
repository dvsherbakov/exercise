// https://www.codewars.com/kata/54dc6f5a224c26032800005c

const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  return listOfArt.length && listOfCat.length
    ? listOfCat
        .map(
          (cat) =>
            '(' +
            cat +
            ' : ' +
            listOfArt
              .filter((art) => art.slice(0, 1) === cat)
              .reduce(
                (prev: number, cur: string) => prev + +cur.replace(/\D+/g, ''),
                0
              ) +
            ')'
        )
        .join(' - ')
    : ''
}

const b = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600']
const c = ['A', 'B', 'C', 'D']

console.log(stockList(b, c))
