//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
    const r1 = n / x;
    const r2 = n / y;

    if (r1 % 1 === 0 && r2 % 1 === 0) {
        return true;
    }
    else {
        return false;
    }
}