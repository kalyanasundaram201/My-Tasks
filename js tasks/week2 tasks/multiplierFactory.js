// 4. Build a 'multiplierFactory(factor)' function that returns a new function. The returned function should take a number and return it multiplied by the initial factor.

function multiplierFactory(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplierFactory(2);
console.log(double(5));

const triple = multiplierFactory(3);
console.log(triple(4)); 