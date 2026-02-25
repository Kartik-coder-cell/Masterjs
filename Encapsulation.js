//wrapping up of data and function in a single unit and restricting direct access to some parts of the object is known as encapsulation

function countlimit(){
    let count = 0;          //here we hide our count variable
    return function(){
        if(count < 5){
            console.log(`clicked${count} times`);
            count++;
        }else{
            console.log("Exceeded");
        }
    }
}
let fun = countlimit();
fun();
fun();
fun();