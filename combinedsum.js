// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function combinedSum(list, expectedTotal) {
    let map = list.reduce((acc, item) => {
        if(acc[item]) {
            acc[item] += item
        } else {
            acc[item] = item
        }
        return acc
    }, {})

    for(let i=0; i<list.length; i++) {
        const remainingValue = expectedTotal - list[i]
        map[list[i]] -= list[i]
        if (map[remainingValue]) {
            return true
        }
        map[list[i]] += list[i]
    }
    return false
}

console.log(combinedSum([10, 15, 3, 7, 15, 30], 30))
