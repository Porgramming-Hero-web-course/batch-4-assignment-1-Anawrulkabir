"use strict";
// Problem - 5 : Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
const getProperty = (person, property) => {
    return person[property];
};
const person = {
    name: 'Fahad',
    age: 24,
    phone: '+88012345678',
};
console.log(getProperty(person, 'phone')); // +88012345678
console.log(getProperty(person, 'name')); // Fahad
console.log(getProperty(person, 'age')); // 24
