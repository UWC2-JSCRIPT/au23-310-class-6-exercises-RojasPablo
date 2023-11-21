/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model){
        this.model = model;
        this.currentSpeed = 0;
        
        }
        brake(){
            this.currentSpeed -= 1
        }
        accelerate() {
            this.currentSpeed += 1
        }
        toString() {
            return `${this.model} has a speed of ${this.currentSpeed}`
        }
}
const Mazda = new Car('Mazda 3', 0);
Mazda.accelerate();
Mazda.accelerate();
Mazda.brake()
console.log(Mazda.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
*/

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model, motor, currentSpeed = 0){
        super(model);
        this.motor = motor;
        this.currentSpeed = currentSpeed;
    }
    accelerate(){
        this.currentSpeed += 2
    }
    toString() {
        return `This ${this.motor} Tesla ${this.model} has a speed of ${this.currentSpeed}`
    }
}
const Tesla = new ElectricCar('model 3','electric')
Tesla.accelerate()
Tesla.accelerate()
Tesla.brake()
console.log(Tesla.toString())


