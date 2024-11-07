"use strict";
// Problem 1 : Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
{
    const sumArray = (array) => {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    };
    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);
}
