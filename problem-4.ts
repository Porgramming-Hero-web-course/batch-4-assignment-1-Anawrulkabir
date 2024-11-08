// Problem : Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

{
  type Circle = {
    shape: 'circle'
    radius: number
  }

  type Rectangle = {
    shape: 'rectangle'
    height: number
    width: number
  }

  type Shape = Rectangle | Circle

  const calculateShapeArea = (myObject: Shape): number => {
    let area: number = 0
    if (myObject.shape === 'circle')
      area = parseFloat(
        ((22 / 7) * myObject.radius * myObject.radius).toFixed(2)
      )
    else if (myObject.shape === 'rectangle')
      area = parseFloat((myObject.height * myObject.width).toFixed(2))

    return area
  }

  const circleArea = calculateShapeArea({ shape: 'circle', radius: 5 })

  const rectangleArea = calculateShapeArea({
    shape: 'rectangle',
    width: 4,
    height: 6,
  })

  console.log(circleArea)
  console.log(rectangleArea)
}
