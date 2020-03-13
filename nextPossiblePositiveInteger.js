// Given an array of integers,
// find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2.
//  The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

function getNextMissingPositiveInteger(ip) {
    let totalLength = ip.length;
    let i = 0;
    //  Moves negative and zero numbers to the end of the array
    while ( i < totalLength && totalLength > 0) {
        if(ip[i] <= 0) {
            totalLength--;
            [ip[i], ip[totalLength]] = [ip[totalLength], ip[i]];
        } else {
            i++;
        }
    }
    const firstNonPositiveIndex = ip.findIndex((num) => num < 0);
    const maxPossiblePositiveInteger = firstNonPositiveIndex === -1 ? ip.length : firstNonPositiveIndex;

    // Makes the index positions of the numbers that are in range to negative
    for(let i = 0; i < maxPossiblePositiveInteger; i++) {
        let absoluteValue = Math.abs(ip[i]);
        if (absoluteValue <= maxPossiblePositiveInteger && ip[absoluteValue - 1] > 0) {
            ip[absoluteValue - 1] = -ip[absoluteValue - 1];
        }
    }

    // Finds the index position of the first positive number in the range
    let currentFirstMaxInteger = maxPossiblePositiveInteger;
    for(let i = 0; i< maxPossiblePositiveInteger; i++) {
        if (ip[i] > 0) {
            currentFirstMaxInteger = i;
            break;
        }
    }
    
    return currentFirstMaxInteger + 1;
}

console.log(getNextMissingPositiveInteger([-1, -2, 4, -10, 0, 1, -400, 200, 0]));
console.log(getNextMissingPositiveInteger([3, 2, 1]));
console.log(getNextMissingPositiveInteger([1, 2, 2, 3, 3, 1]));
console.log(getNextMissingPositiveInteger([1, 2, 2, 3, -3, 5, 4, 6]));
console.log(getNextMissingPositiveInteger([]));