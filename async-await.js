//async await is used to handle promises in a more elegant way. It allows us to write asynchronous code that looks synchronous, making it easier to read and understand.

//async function always returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with that error.
//awiat pauses the execution of the async function until the promise is resolved or rejected. It can only be used inside an async function.

//syntax:
//async function functionName(){
//     //code
// }


function getdata(dataid){
    return new Promise((resolve, reject)=>{
setTimeout(()=>{
  
    console.log("Data" + dataid);
    resolve("suvccess");
}, 3000);
    });
}

async function showdata(){
    console.log("getting data1");
    await getdata(1);
    console.log("getting data2");
    await getdata(2);
    console.log("getting data3");
    await getdata(3);       
    console.log("getting data4");   
    await getdata(4);
    console.log("Success");
}
    

//IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined. It is a common pattern in JavaScript to create a new scope and avoid polluting the global scope.
        (async function (){
            console.log("getting data1");
            await getdata(1);
            console.log("getting data2");
            await getdata(2);
            console.log("getting data3");
            await getdata(3);       
            console.log("getting data4");   
            await getdata(4);
            console.log("Success");
        })();