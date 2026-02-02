// let a = 10;  //popular
// var b = 10   // not popular
// const c = 10;  //we cant change the value of const
// console.log(a + b + c);


//primitives - when we copy a value we get a real copy of that value
//string
let name = "john";
let fullName = 'john doe';
let city = `new york`;

//number
let age = 25;
let price = 19.99;

//boolean
let isStudent = true;
let isEmployed = false;

//null
let middleName = null; // dont give a value

//undefined
let lastName; // value is not assigned

//symbol
let uniqueId = Symbol('id1'); // unique identifier immutable

//bigint
let bigNumber = 1234567890123456789012345678901234567890n; // for large integers


//non-primitives - we cant get original copy of value

//array
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'cherry'];

//object
let person = {
    name : "kartik",
    age:20,
    city:"nasik",
};

//function
function greet(){
    console.log("hello world");
}
greet();

//date
let currentDate = new Date();
console.log(currentDate);


//imp* js uses dynamic typing