// addEventListener('click', function(event) {
//     console.log(event);
// })

// // callback

// customGetDataFromAPI('https://jsonplaceholder.typicode.com/posts/1', function(response) {
//     // callback hell

// });


//what is a promise?

// what are the outcomes of a promise ?
// I can keep my promise
// I can not keep my promise

// In JS, promises are objects which will either fulfill or reject your request.

// Promise((resolve, reject)) {
//     reject();
// }

// whenever a promise is called, it will be in one of the 3 states
// pending
// fulfilled
// rejected


// let myPromise = new Promise(function(myResolve, myReject) {
// // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
// );
console.log(1);

let prom = new Promise(function(resolve, reject) {
    // resolve(2);
    reject(2);
})

console.log(3);


prom.then(function(data) {
    console.log(data);
}).catch(e => console.log(e)).finally(console.log("done"));
