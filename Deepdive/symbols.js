// what is a symbol?

//Javascript  ECMAScript


//In 2015  ES6 

//ES6 released a new primitive called Symbol

//Boolean, number, string,


let symbol = Symbol('my symbol');

// console.log(symbol);

//////////


let obj = {
    name: 'Jack',
    age: 21,
    mobile: '9999999999',
    password: '%$$^^^'
}

//name is the key, jack is the value
//age is the key, 21 is the value

// console.log(obj.name);
// console.log(obj.mobile);
// console.log(obj.password);

// for (let i in obj)  {
//     console.log(i);
// }


let password = Symbol();
// let sym2 = Symbol();

let myObj = {
        name: 'Jack',
        [password]: '^^&*^**!'
    };


for (let i in myObj)  {
    console.log(i);
}

console.log(myObj[password]);