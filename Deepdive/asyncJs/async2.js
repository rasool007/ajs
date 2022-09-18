// setTimeOut
// setTimeInterval
// Promise.all
//async await,axios


//promises, setTimeout, async await

//JS runs in a JS engine
//each browser comes up with some engine
//IE- has their engine chakra
//chrome - v8

// console.log(1);
// setTimeout(function(){console.log(2)}, 1000);
// console.log(3);

//output 1 3 2

// let promiseNormal = new Promise(function(resolve, reject) {
    
// })

let listPromise = new Promise((resolve, reject) => {
    resolve();
});

let detailsPromise = new Promise((resolve, reject) => {
    resolve();
})

//A scenario

// In my website, I want to list all the products
// Once user clicks on a product, I want to display the details of it.

// listPromise.then((data) => {
//     let products = data;  
//     promise2.then(()=> {

//     })  
// })

//Scenario

//I have a condition that only show once we have all the products list and details of each are available

Promise.all([listPromise, detailsPromise]).then(()=> {
    console.log("All details fetched!");
}).catch(e => console.log("data fetch failed!"));

