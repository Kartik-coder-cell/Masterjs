//1. Global scope
 console.log(this);
  //The value of this in global scope is window

//2.function
function abcd(){
    console.log(this);
}  
abcd();
// the value of this keyword in function is window

//3.Method - in js the function which declared in object then such a function is known as method
let obj ={
    name : "kartik",
    age : 20,
    fun :()=>{
        console.log(this);
    }
}
obj.fun();  // the value of this in arrow function is window but,

let obj2 = {
    name : "om",
    age : 20,
    fun : function(){
        console.log(this);
    }
}
obj2.fun();  //the value of this is window if you use our normal function
//here,that means this.name -> prints -> om

//4.Event handler 
let h1 = document.querySelector("h1").addEventListener("click" , function(value){
     console.log(this);
     console.log(this.style.color = "red");
});
//here the value of this is on which we apply our addeventlistener

//5.class - in classes the value of this is always a blank object

//some methods
//1.call() - call is used to call a function immediately and set the value of this manually

let person = {
    name : "kartik",
    age : 20,
};
 
function greet(){
    console.log("Hello"+this.name);
}
greet.call(person);

//call() calls the function and
//this inside greet() becomes person 

//2.apply()- these is same as call() but arguments are passed in array form 
let obj3 ={
   name : "Kartik",
   age :20,
   address : "nasik",
};

function abcd(a,b){
    console.log(this,a,b);
}

abcd.apply(obj3, [a,b]);

//3.bind() - these is also same as call() but it returns a function and later we call it

let obj4 ={
    name : "Kartik",
    age :20,
    address :"Nasik",
};

function test(){
    console.log("Hello"+this.name);
}
let t =test.bind(obj4);
t();
