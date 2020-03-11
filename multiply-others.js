// Given an array of integers, return a new array such that
// each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

function simpleMultiplier(input) {
    const productOfAllValues = input.reduce((acc, i) => acc * i, 1)
    console.log(productOfAllValues);
    return input.map(i => productOfAllValues / i)
}

function countingZeroesMultiplier(input) {
    const zeroIndexes = [];
    let nonZeroProductValue = 1;
    input.forEach((value, index) => {
        if (value === 0) {
            zeroIndexes.push(index);
        } else {
            nonZeroProductValue *= value;
        }
    })
    if (zeroIndexes.length === 0) {
        return input.map(i => nonZeroProductValue / i)
    }
    if (zeroIndexes.length === 1) {
        const output = Array.from({length: input.length}, () => 0);
        output[zeroIndexes[0]] = nonZeroProductValue
        return output
    }
    return Array.from({length: input.length}, () => 0);
}

function simpleFollowUpMultiplier(input) {
    return input.map((ip, i) => {
        return input.reduce((acc, value, index) => {
            if (index != i){
                acc *= value;
            }
            return acc
        }, 1)
    })
}

console.log(simpleMultiplier([1,2,3,4,5]));
console.log(simpleMultiplier([1,2,0,4,5])); // This will fail when a zero is present in between
console.log(simpleFollowUpMultiplier([1,2,0,4,5])); // This handles zero case as well
console.log(simpleFollowUpMultiplier([3,2,1]));
console.log(countingZeroesMultiplier([1,2,3,4,5]));
console.log(countingZeroesMultiplier([1,2,3,0,5]));
console.log(countingZeroesMultiplier([1,2,3,0,0]));