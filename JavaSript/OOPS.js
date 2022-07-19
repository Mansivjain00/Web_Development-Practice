console.log("OOPS JavaScript");

// Why Object?
// Unique entity with property and methods.
// In real life we deal with objects and their properties

/* 

Example: Car object
Methods:
i.IncreaseSpeed(), DecreaseSpeed(), etc

 */

// Object literal for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run : function () {
        console.log("Car is running");
    }
}

console.log(car);
console.log(car.run);
console.log(car.name);

// new operator: used to create an object
function GeneralCar(given_name , Speed) {
    this.name = given_name;
    this.topSpeed= Speed;

    this.run =function () {
        console.log(`${this.name} is running`);
    }

    this.analyse = function () {
        console.log(`This car is slower by ${200-this.topSpeed}km/hr than Mercedes`);
    }
}


let car1 = new GeneralCar('Nissan',90);
let car2= new GeneralCar('Maruti Suzuki',180);
console.log(car1);