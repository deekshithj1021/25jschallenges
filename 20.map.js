/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */


function maps(x) {
    const res = x.map((xItem) => {
        return xItem * 2;
    });
    return res;
}