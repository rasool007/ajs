//JavaScript Arithmetic Operators

// Addition ->  
// console.log(2+3); //5

// subtraction -> 
// console.log(5-4) //1

//multiplication

// console.log(4*5) //20;

// division

// console.log(10/2) // 5

// modulus

// console.log(10%2) // 0

//exponential

// console.log(2**3);

// console.log(2^3);

//Increment

//x = x+1;   // x++;
let x = 10;
x++;  //equvalent to x = x+1; 
// console.log(x);

//Decrement

let y =10;
y--;
// console.log(y);

//JavaScript Assignment Operators
 let a = 100;
 let b = 10;

a = a+b;  //110
a += b;  //110

a -= b;  


//JavaScript String Operators
let str1 = "hello";
let str2 = "world";
let str = str1+ " " + "world"; //concatenation of strings
let strr = `${str1} ${str2}`; //template literals way - we use backticks

//Adding Strings and Numbers

let sentence  = str1 + 100;  // "hello" + "100" ->  "hello100"

//JavaScript Comparison Operators

// == double equal operator
// will check for only value 
//is x equal to y?
let i = 100;
let j = 100;
i == j  // true or false

j = "100";

i == j //true

// === tripe equal operator
// will check for value as well as type

x === y  //false;

//< =
//> =
 
//? - ternary operator
let condition = true;

// if(condition) {
//     console.log("condition is true");
// }
// else {
//     console.log("condition is false");
// }

// syntax - > condition ? true case : false case
// condition ? console.log("condition is true") : console.log("condition is false");

// condition ? console.log("condition is true") : condition2 ? console.log("true of condition 2"):console.log("condition is false");







// JavaScript Logical Operators  //ternary operator

//logical AND  
// 0  is false
// any positive number or any value is true
if(a && b) {
    //console.log("both are true");
}

//logical OR

if(a || b) {
    //console.log("one of them is true");
}

// JavaScript Type Operators

let value1 = 10;

// console.log(typeof(value1));

// console.log(value1 instanceof Number);


let value2 = "10"; // string literal

let value3  = new String("10");

// console.log(typeof(value2));

console.log(value3 instanceof String);

// JavaScript Bitwise Operators - need to revisit after binary and bitwise explained

Operator	Description	Example	Same as	Result	Decimal
&	AND	  5 & 1	 0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2


