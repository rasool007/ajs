// const boxes = [
//     { value: 1, getValue() { return this.value; } },
//     { value: 2, getValue() { return this.value; } },
//     { value: 3, getValue() { return this.value; } },
//   ];

  
//   const boxPrototype = {
//     getValue() { return this.value; },
//   };
  
//   const boxes = [
//     { value: 1, __proto__: boxPrototype },
//     { value: 2, __proto__: boxPrototype },
//     { value: 3, __proto__: boxPrototype },
//   ];


  // A constructor function
// function Box(value) {
//     this.value = value;
//   }
  
//   // Properties all boxes created from the Box() constructor
//   // will have
//   Box.prototype.getValue = function () {
//     return this.value;
//   };

//   Box.prototype.sayHi = function() {
//     console.log("Hi there!");
//   }
  
//   const boxes = [
//     new Box(1),
//     new Box(2),
//     new Box(3),
//   ];

//   for(let box of boxes) {
//     console.log(box.getValue());
//   }

  
  class Box {
    constructor(value) {
      this.value = value;
    }
  
    // Methods are created on Box.prototype
    getValue() {
      return this.value;
    }

    sayHi() {
        console.log("Hi there!");
    }
  }

  let box1 = new Box(100);
  let box2 =  new Box(200);

  box1.custom = function() {
    console.log("custom");
  }

//   console.log(box1.getValue());
//   console.log(box1.custom());
  console.log(box2.custom());

console.log(box1.getValue());
console.log(box1);
  