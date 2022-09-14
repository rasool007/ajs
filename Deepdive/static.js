class Truck {
    constructor() {

    }

    startEngine() {
        console.log("Engine started!! vroom vroom");
    }

    static classMethod() {

    }
}

let truck1 = new Truck();
truck1.startEngine();

//Truck.startEngine() //not valid

Truck.classMethod() // valid