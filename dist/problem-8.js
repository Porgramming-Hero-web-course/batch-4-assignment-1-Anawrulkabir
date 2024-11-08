"use strict";
// Problem - 8 : Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
{
    const validateKeys = (obj, keys) => {
        let res = true;
        for (const key of keys) {
            if (!(key in obj))
                res = false;
        }
        return res;
    };
    const person = { name: 'Alice', age: 25, email: 'alice@example.com' };
    console.log(validateKeys(person, ['name', 'age'])); // true
    //   console.log(validateKeys(person, ['name', 'age', 'address'])) // false
}
