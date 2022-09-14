console.log(variable1); // throw error or print undefined or print 10?

var variable1 = 10;

console.log(variable2);

let variable2 = 20;


//after hoisting

var variable1 = undefined;
/*******/
//TEMPORAL DEAD ZONE
let variable2 = undefined;
/*******/

console.log(variable1);

variable1 = 10;

console.log(variable2);
