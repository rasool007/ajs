function Rectangle(length, width) {  
    this.name = 'Rectangle';
    this.length = length;
    this.width = width; 
} 
Rectangle.prototype.sayName = function() { 
    console.log(`Hi, I am a ${this.name}.`);
}; 

Rectangle.prototype.getArea = function() { 
    return this.length * this.width; 
}; 

Rectangle.prototype.toString = function() { 
    return "[Rectangle " + this.length + "x" + this.width + "]"; 
}; 

// Square inherits from Rectangle 
function Square(size) {  
    this.length = size; 
    this.width = size; 
} 

Square.prototype = new Rectangle(); 
Square.prototype.constructor = Square; 

Square.prototype.toString = function() { 
    return "[Square " + this.length + "x" + this.width + "]"; 
}; 

var rect = new Rectangle(5, 10); 
var square = new Square(6); 

console.log(rect.getArea());        // 50 
console.log(square.getArea());      // 36 

console.log(rect.toString());       // "[Rectangle 5x10]" 
console.log(square.toString());     // "[Square 6x6]" 