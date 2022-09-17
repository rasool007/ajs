// Async JS-Sending and recieving data

// JSON
// Promises
// ,fetch
// Ajax,
//  POSTMAN Intro


//Earlier - or long back
// all the applications were monolith

//example
//java was the language on which the applications were built.
//They used to have .jsp files or something similar to display the application on UI.

//In case of .Net
//even now, some applications are with .aspx extension

//disadvantages
//The entire application was bundled as a single one and the size was huge.
// you can only use the UI(frontend) what the application has.

//To solve this problem, developers came with multi tier architecture

//They divided the application into multiple layers / tiers

//frontend layer - js, html, css, react, angular, vuejs
//backend layer - java, python, .net, nodejs
//database - mysql, mongoDB

// To communicate, the web applications will use APIs and send and receive requests using it.

//API  Rest API 
//Rest - Representational state trasfer

//Application programming interface

//developers came up with some standards about API communication

//operations or types of API calls

//GET - To get some information from server
//POST - To post something to the server (save something)
//PUT - To update existing record
//DELETE - To delete any record
//PATCH - to give a small update

//GET call

//'https://api.uber.com/products?latitude=jhahha&logitude=shfhsjhfs'

// we need API endpoint   https://api.uber.com/products
// we need some authentication information  // tokens
// query params -latitude, logitude
//Header

//Now, the server responds

//can be sucess or failure
//200 Ok - success

//403 - forbidden (not authorized)
//404 - Not found

//500 - Interna server error

//response - data
//Most commonly used response format is JSON

//JSON - JavaScript Object Notation

//looks like JS object

let jsonResponse = {
    "name": "John",
    "age": 21,
    "address": {
        "HouseNo": 12,
        "Street": "adafa",
        "city": "Delhi",
        "Pin": 4424242
    },
    "hobbies": ["movies", "books", "singing"]
}

// console.log(jsonResponse);
// for(hobby of jsonResponse.hobbies) {
//     console.log("Each hobby is ", hobby);
// }

//To convert to JSOn, we can use JSON.parse

let obj = '{"name": "hafha", "age": 21}';
// console.log(JSON.parse(obj));

// console.log(JSON.stringify(jsonResponse));


//AJAX - Asynchronous javascript and xml

//Javascript is single threaded language

// means it can do one thing at a time only

console.log("1");

setTimeout(function(){
    console.log("2");
}, 0);

console.log("3");
console.log("4");

//sample API - https://jsonplaceholder.typicode.com/posts/1

// All the API calls are asynchronous in nature.


//fetch - it is used to make API calls with better syntax than actual AJAX calls.


fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=> {
    console.log(res);
}).catch()

