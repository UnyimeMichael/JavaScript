let vehicle = { wheels: 4, canMove: true};
let car = {
    seats: 4,
    __proto__: vehicle

};
let driver = { humans: 4, __proto__: car};

console.log("car", car);
console.log("vehicle", vehicle);
console.log(car.hasOwnProperty("wheels"));
console.log(car.hasOwnProperty("seats") + "this is car has own property");
console.log(driver.hasOwnProperty("wheels") + "This is for human");
console.log("vehicle property ", vehicle.__proto__);
console.log("does car have toString", car.toString)