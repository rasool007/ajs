// class is a blueprint of an object

class Car {
    constructor(color) {
        // first thing to be called
        this.length = 1500
        this.width = 800;
        this.color = color ? color : 'white';
    }

    // turbo = 'normal';

    set decors(inp) {
        this.decors = inp;
    }

    get decors() {
        return this.decors;
    }

    ignition() {
        console.log("engine started");
    }

    applyBrakes() {
        console.log("Brakes applied");
    }

    getColor() {
        console.log(this);
        console.log("Hey you ordered for a " + this.color + " car");
    }
}

class ElectricCar extends Car {

    ignition() {
        console.log("motor started");
    }
}


let sampathCar = new Car();
// console.log(sampathCar);
// console.log(sampathCar.ignition());

let sameerCar = new Car('red');
sameerCar.setTurbo('advanced');

console.log(sameerCar);
// console.log(sameerCar.ignition());
// console.log(sameerCar.applyBrakes());

console.log(sameerCar.getColor());

let priyaCar = new ElectricCar();
// console.log(priyaCar);
// console.log(priyaCar.ignition());
// console.log(priyaCar.applyBrakes());
console.log(priyaCar.getColor());



