// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    return [...new Set(text.toLowerCase().split(""))].reduce(
        (acc, cur) =>
            text
                .toLowerCase()
                .split("")
                .filter((x) => x === cur).length > 1
                ? ++acc
                : acc,
        0
    );

}

console.log(duplicateCount("Indivisibility"));
