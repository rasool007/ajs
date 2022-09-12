//Lecture 1: JavaScript Prototypes

//what is inheritance?

//inheritance is a concept where a class/object borrows 
//some properties/methods from another class/object

//JS intehitance
//JS prototype
//JS prototype chaining

class test {
    constructor() {
        this.name = '10x'
    }

    getName() {
        return this.name;
    }
}

// the class that you have seen above is just syntactic sugar to how proototype is implemented
//Behind the scenes

// let arr = [];
// arr.push(1);
// console.log("THe length of arr is:::::",arr.length);

let obj1 = {};

//prototype

let person = {
    name: 'Ravi',
    age: 21
};

let person2 = {
    city: 'Delhi'
}

person.__proto__ = person2;

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.pincode);


let arr = [];

Array.prototype.customMethod = function() {
    console.log("Hi");
}


console.log("The length of arr is:::::",arr.length);


let arr2 = [];

let arr3 = [];