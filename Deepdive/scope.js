// scopes in JS

// global scope
// local scope
// function scope
// block scope

//lexical scope -> 

let a = 10;

// console.log(a); // 10;

function dummy() {
    // Do I have 'a' inside this function?
    let a = 20;
    console.log("The value of a is ", a);
    // console.log("The value of b is ", b);
    let c = 11;
    function dummyChild() {
        console.log(c);
    }
}

// console.log(c);

// dummy();

function dummy2() {
    let a = 20;
    {
        let a = 30;
        console.log("The value of 'a' inside curly braces of dummy 2 ", a);// 30
    }
    console.log("The value of a in dummy 2 ", a); // 20

    for(let i = 0; i < 5; i++) {
        console.log(i); //0, 1, .....
        for(let i = 10; i < 20; i++) {
            console.log(i); //100, 101 .....
        }
    }

    for(let i = 100; i < 105; i++) {
        console.log(i);
    }
}

//dummy2();

//var, let and const
// var x = 5;
// var x = 10;

// let and const are block scoped

// var is not block scoped

for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("The value of i here is ", i);
    }, 5000); // 1000 milliseconds = 1 second
}

for(let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("The value of i here is ", i);
    }, 5000);
}


