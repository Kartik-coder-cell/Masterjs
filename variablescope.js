//global scope - can be accessed anywhere in the code
var name = "John";
function greet() {
    console.log("Hello, " + name);
}   

//local scope - can only be accessed within the function - also known as functional scope
function greet() {
    var name = "Jane";
    console.log("Hello, " + name);
}   

//block scope - can only be accessed within the block (if, for, while) - also known as lexical scope
if (true) {
    let name = "Jack";
    console.log("Hello, " + name);
}

