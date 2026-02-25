//Closures - a function having a return function and that returning function must use atleast one variable of parent function then 
// this scenario is known as closure. It is used to create private variables and functions in JavaScript. It allows us to access the outer function's scope from the inner function even after the outer function has finished executing.

function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}
let fun = abcd();
fun();

//it is true that when your function destroyed, your variables also destroyed 
// But in closure, function and variables ka ek backlink create hota hei and usko bolte hei[[environment]]
//backlink = copy of variables and functions 

