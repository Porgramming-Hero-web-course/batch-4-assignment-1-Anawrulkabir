// Problem - 1 : Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

{
  const sumArray = (array: Array<number>): number => {
    let sum: number = 0

    for (let i: number = 0; i < array.length; i++) {
      sum += array[i]
    }

    return sum
  }

  const result: number = sumArray([1, 2, 3, 4, 5])
  console.log(result)
}
