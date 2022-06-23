const Sudoku = function (data) {

    const getRow = (r) => data.map(row => row[r])

    const isCorrectLine = (line) =>
        line.length === [...new Set(line)].length
        && line.every(x => Number.isInteger(x)
            && x > 0 && x <= line.length)

    const isCorrectDimension = (dim = data.length) =>
        Math.sqrt(dim) === ~~Math.sqrt(dim)

    const is2dArray = () =>
        Array.isArray(data) && data.reduce((acc, row) => acc && Array.isArray(row), true)

    const isSquare = () =>
        data.reduce((acc, row) => acc && row.length === data.length, true)

    const isCorrectLines = () =>
        data.reduce((acc, row, idx) => acc && isCorrectLine(row) && isCorrectLine(getRow(idx)), true)

    const isCorrectSmallSquares = () => {
        const dim = Math.sqrt(data.length)
        let isOk = true
        for (let s = 0; s < data.length; s++) {
            const biasX = ~~(s / dim)
            const biasY = s % dim;

            const smallBox = []
            for (let i = 0; i < dim; i++) {
                for (let j = 0; j < dim; j++) {
                    smallBox.push(data[biasX * dim + i][biasY * dim + j])
                }
            }
            isOk = isOk && isCorrectLine(smallBox)
        }
        return isOk
    }

    return {
        isValid: function () {
            return is2dArray() && isSquare() && isCorrectDimension() && isCorrectLines() && isCorrectSmallSquares()
        }
    };
};

const goodSudoku1 = new Sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
]);

const goodSudoku2 = new Sudoku([
    [1, 4, 2, 3],
    [3, 2, 4, 1],

    [4, 1, 3, 2],
    [2, 3, 1, 4]
]);


const badSudoku1 = new Sudoku(
    [
        [0, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ])

const badSudoku2 = new Sudoku([[1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1]])

const badSudoku3 = new Sudoku([[2]])
const badSudoku4 = new Sudoku([['']])
const badSudoku5 = new Sudoku([[0]])
const badSudoku6 = new Sudoku([[true]])

const testSudoku = new Sudoku([[1]])

console.log(goodSudoku1.isValid())
console.log(goodSudoku2.isValid())
console.log(badSudoku1.isValid())
console.log(badSudoku2.isValid())
console.log(badSudoku3.isValid())
console.log(badSudoku4.isValid())
console.log(badSudoku5.isValid())
console.log(badSudoku6.isValid())

