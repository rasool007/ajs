let myData = '';
function fetchAPI() {
    console.log("fetAPI called");
    document.getElementById('addlInfo').innerHTML = '';
    axios.get('https://randomuser.me/api').then((response) => {
        console.log("data fetched");
        console.log(response);
        myData = response.data.results[0]; // I am assuming only 1 result  
        console.log(myData);
        document.querySelector('img').setAttribute('src', myData.picture.large);
        document.getElementById('fName').innerHTML = `${myData.name.title} 
        ${myData.name.first} 
        ${myData.name.last}`;

        //set attributes to buttons
        document.getElementById('age').setAttribute('data-attr', myData.dob.age);
        document.getElementById('email').setAttribute('data-attr', myData.email);
        document.getElementById('phone').setAttribute('data-attr', myData.phone);

        // add eventlisteners to the buttons
        function clickHandler(event){
            console.log("You clicked me!");
            console.log(event.target.attributes['data-attr'].value);
            document.getElementById('addlInfo').innerHTML = event.target.attributes['data-attr'].value;
        }
        document.getElementById('age').addEventListener('click',clickHandler);
        document.getElementById('email').addEventListener('click',clickHandler);
        document.getElementById('phone').addEventListener('click',clickHandler);
    }).catch(e => {
        console.log(e);
    })
}

document.getElementById('getUser').addEventListener('click', fetchAPI);
console.log("script file loaded");


//using fetch

fetch('https://randomuser.me/api').then(res => res.json().then((data) => {
    console.log("Inside fetch");
    console.log(data);
    console.log(data.results[0]);

    //myData = data.results[0]; instead of response.data.results[0];
}))
