// Problem - 5 : Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

interface Person {
  name: string
  age: number
  phone?: `+880${number}`
}

const getProperty = <Person, information extends keyof Person>(
  person: Person,
  property: information
) => {
  return person[property]
}

const person: Person = {
  name: 'Fahad',
  age: 24,
  phone: '+88012345678',
}

console.log(getProperty(person, 'phone')) // +88012345678
console.log(getProperty(person, 'name')) // Fahad
console.log(getProperty(person, 'age')) // 24
