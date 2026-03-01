//callback function is a function that is passed as an argument to another function and is executed after the completion of that function.

// function sum(a,b){
//     console.log(a+b);
// }

// function result(a,b, sumcallback){
//     sumcallback(a,b);
// }

// result(5,10,sum);

const hello = ()=>{
    console.log("Hello");
}

setTimeout(hello,2000); // it will execute the hello function after 2 seconds.

