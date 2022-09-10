/***************************************
Property Descriptors Methods and Usage

Object.defineProperty(obj, propName, {} )
Object.defineProperties(obj, props)
Object.getOwnPropertyNames(obj)
Object.getOwnPropertyDescriptor(obj, prop)
Object.getOwnPropertyDescriptors(obj)
Object.keys(obj) - list of enumerable properties
Object.values(obj) - list of enumerable prop values

obj.propertyIsEnumerable(prop)
obj.hasOwnProperty(prop)

Objects can be
1. Extensible - new properties added
2. Frozen - props cannot be changed in any way
3. Sealed - props can't be deleted or configured
          but are still writable

Object PROPERTIES can be 
1. Writable - change the value
2. Enumerable - seen through a for...in loop
3. Configurable - change the property descriptors

Object.isExtensible(obj)
Object.isFrozen(obj)
Object.isSealed(obj)
Object.preventExtensions(obj)
Object.freeze(obj)
Object.seal(obj)

Descriptor Groups
DATA            ACCESSOR          
value           get
writable        set
configurable    configurable
enumerable      enumerable
****************************************/

// let str1 = "hello";
// let str2 = str1;

// str1 = "hello world!!!!!"
// console.log(str2);


// let object1 = {
//     name: 'Ravi'
// }

// let object2 = object1;

// object1.name = "Modi";
// object1.age = 21;

// console.log(object2);


let obj = {
    name: '10x'
};

Object.defineProperty(obj, 'city', {
    value: 'Hyderabad',
    writable: false,
    configurable: true,
    enumerable: true
} );

Object.defineProperty(obj, 'password', {
    value: 'testpwd',
    writable: false,
    configurable: true,
    enumerable: false
} );

Object.defineProperty(obj, 'test', {
    value: 'dummy',
    writable: true,
    configurable: false,
    enumerable: true
} );


Object.defineProperty(obj, 'random', {
    set: function(val) {
        this.value = 'pure randomness'
    },
    get: function() {
        return this.value;
    },
    configurable: false,
    enumerable: true
} );


obj.city = "Mumbai";
delete(obj.test);
//Object.freeze(obj);


obj.anotherProperty = 'jhfkskf;ksh';
// console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));


// for(let key in obj) {
//     console.log("The value of "+key+ " is "+obj[key]);
// }

//console.log(Object.getOwnPropertyNames(obj));