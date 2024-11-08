// Problem - 5 : Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

interface Person {
  name: string
  age: number
  phone?: `+880${number}`
}

const getProperty = <X, Y extends keyof X>(person: X, property: Y) => {
  return person[property]
}

const person: Person = {
  name: 'Fahad',
  age: 24,
  phone: '+88012345678',
}

console.log(getProperty(person, 'name')) // +88012345678
console.log(getProperty(person, 'name')) // Fahad
console.log(getProperty(person, 'age')) // 24
