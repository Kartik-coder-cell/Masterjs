//function

//function syntax
function fun_name(parameter1, parameter2) {
  // code to be executed
}

//function call
fun_name(arg1, arg2);

//function return
function sum(a, b) {
  return a + b;
}   
let result = sum(5, 10); // result is 15
console.log(result);

//function expression
let multiply = function(a, b) {
  return a * b;
};  
let product = multiply(5, 10); // product is 50
console.log(product);

//arrow function
let divide = (a, b) => a / b;  
let quotient = divide(10, 2); // quotient is 5
console.log(quotient);



//IIFE (Immediately Invoked Function Expression)
(
function() {
    console.log("This function runs immediately upon definition.");
})();

//first class function
function greet(name) {
    return "Hello, " + name + "!";
}       
function processUserInput(callback) {
    let name = "Alice";
    console.log(callback(name));
}
processUserInput(greet); // Outputs: Hello, Alice!

//higher order function
function abcd(){
    return function(){
        console.log("This is a higher order function example.");
    }
}
abcd()(); // Outputs: This is a higher order function example.

//pure and impure functions
// Pure function - outside values are not changed
let a=10;
function pure(){
    console.log(a)
}
pure(); // Outputs: 10

// Impure function - outside values are changed 
 let b=10;
function impure(){
    console.log(b+2);
}
impure(); // Outputs: 12


//closure
function abcd(){
    let a =10;
     return function xyz(){
        console.log(a);
     }
}
abcd()(); // Outputs: 10


//lexical scoping

function abc(){
    let a=10;         //a is used in all the nested functions
    function xyz(){
        let b=10             //b is used in its nested function
        function pqr(){
            let c=20;          ///c only used in pqr function
    }
  }
}