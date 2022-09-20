// async - setTimeout, promises, async await

//console.log(1);
//promise
//console.log(2);

//callback example

getDataFromApi('http:jlsfkjhsfjhs/api',handleAPIResponse)

function handleAPIResponse(response) {

    let dataForUI =  response.data;
}

//improved way to deal - promises

const myData = fetch('http://jgajkhdkahjkfa/api');
console.log(myData) //undefined because the API was not ready with data immediately
//
fetch('http://jgajkhdkahjkfa/api').then((response) => {
    myData = response.data;
    console.log(myData); // outputs value
}).catch(error => {

});

console.log(myData); // undefined

//A better way than promises 
// async await

async function getData() {
    try {
        const myData = await fetch('http://jgajkhdkahjkfa/api');
    } catch(error) {

    }
}

myPromise =  new Promise((resolve,reject)=> {
    setTimeout(resolve(1), 5000);
});

myPromise.then((data) => {
    console.log(data);
});


