// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and
// car(pair) and cdr(pair) returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:
function cons(a, b) {
    function pair(f) {
        return f(a,b);
    }
    return pair;
}

function car(f) {
    function getFirst(a) {
        return a;
    }
   return f(getFirst);
}

function cdr(f) {
    function getLast(_, b) {
        return b;
    }
   return f(getLast);
}
console.log(car(cons(1,2)));
console.log(cdr(cons(1,2)));
