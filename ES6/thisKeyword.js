console.log(this);

//'this' keyword will give the owner of who is calling 

// this keyword inside a class or object is pointing to the object

// this keyword in global will point to global object

// inside a function the context of this is global object

function sampleFunc() {
    // console.log("Inside sample func", this);
}

function test() {
    //console.log(this);
    sampleFunc();
}

test();

let dd = new sampleFunc();

// console.log(dd);


let obj = {
    print() {
        console.log(this)
    }
}
obj.print();
