"use strict";
// Problem - 7 : Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        // method : a funtion inside a class constructor is called method in js/ts
        getCarAge() {
            console.log(`${2024 - this.year} (assuming current year is 2024)`);
        }
    }
    const car = new Car('Honda', 'Civic', 2018);
    car.getCarAge();
}
