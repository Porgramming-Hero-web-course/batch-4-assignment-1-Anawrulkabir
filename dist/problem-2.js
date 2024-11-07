"use strict";
// Problem 2 : Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
{
    //   number 1 method
    const removeDuplicates = (array) => {
        const arrayWithoutDuplicates = [...new Set(array)];
        return arrayWithoutDuplicates;
    };
    //   number 2 method
    const removeDuplicates2 = (array) => {
        const arrayWithoutDuplicate = array.filter((n, i) => {
            return array.indexOf(n) === i;
        });
        return arrayWithoutDuplicate;
    };
    //   number 3 method - bangla method
    const removeDuplicates3 = (array) => {
        // steps ==>
        // 1. create a new copy of the array
        // 2. sort the array
        // 3. create a new hash array copy from the array
        // 4. fill with 0 in each index of the array
        // 5. iterate over the sorted array and increase the hashArray indexed value
        // 6. then check whether any index doesnot contain 0(zero) and create a new resultant array with this
        // 7. finally return the resultant array
        const len = array.length;
        const sortedArray = [...array].sort();
        const maxNumber = sortedArray[len - 1];
        const hashArray = [...sortedArray].fill(0, 0, len);
        for (let i = 0; i < len; i++) {
            hashArray[sortedArray[i]]++;
        }
        const resultArr = [];
        for (let i = 0; i < len; i++) {
            if (hashArray[i] !== 0)
                resultArr.push(i);
        }
        return resultArr;
    };
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result); // [ 1, 2, 3, 4, 5 ]
    const result2 = removeDuplicates2([1, 2, 2, 3, 4, 4, 5]);
    console.log(result2); // [ 1, 2, 3, 4, 5 ]
    const result3 = removeDuplicates3([1, 2, 2, 3, 4, 4, 5]);
    console.log(result3);
}
