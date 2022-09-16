//closure?


// function x() {
//     let count = 1;
//     console.log("count is ", count);
//     function y() {
//         console.log("count in y is ", count);
//     }
//     y();
// }

// x();

function addition(a, b) {
     return "The added value is" + a+b;
}

let result  = addition(2, 3); //5
console.log(result); // 


let a = 100;
function x() {
    let count = 1;
    console.log("count is ", count);
    return function y() {
        count++;  // increment
        console.log("Hey, I still remember the value of count even after returned from x and it is incremented by me", count);
    }
    // return y;
}

let z = x();
// z will look like
// z = function y() {
//     console.log("count in y is ", count);
// }
console.log(z);

z();
z();
z();

// A closure is a function bundled along with its lexical scope 

