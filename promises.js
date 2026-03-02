// //promise - a promise is just a javascript object that represents something that will happen in the future
// //it is a solution to callback hell

// //It has 3 possible states
//     //1.pending-the work is going on
//     //2.resolved(fullfilled) - work is completed successfully 
//     //3.reject - something went wrong 

// //basic promise syntax- 

// let promise = new Promise((resolve, reject) =>{
//  console.log("Promise");
// });

// //resolve and reject are two handlers/callbacks in js that are automatically creates in js 

// //pending ex:-

// let p1 = new Promise((resolve, reject)=>{
//     console.log("Promisee is pending ");
// });

// //resolve ex:-

// let p2 = new Promise((resolve, reject)=>{
//     resolve("Successfully resolved");
// });

// //reject ex-

// let p3 = new Promise((resolve, reject)=>{
//     reject("Sorry i reject the promise");
// });


// //ex-
// function getdata(dataid){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             console.log("data",dataid);
//             resolve("Success");
//         }, 2000);
//     });
// }

//.then() - .then() is run when promise is successful(resolved)

//in code

// resolve("food is ready"); --> goes to 

// .then((res)=>{
//     console.log("Good serve it")
// })


//.catch() - runs when promise is fails 

//in code -
//reject("Food is not raedy"); -->goes to 

// .catch((err)=>{
//     console.log("Badd service i will complain");
// });


// let mypromise = new Promise((resolve , reject)=>{
//     let no = (Math.floor(Math.random()*10));

//     if(no > 5){
//         console.log("Resolved number ", +no);
//     }else{
//         console.log("Rejected number", +no);
//     }
// });

// mypromise.then((res)=>{
//     console.log(res);
// }).catch(function(err){
//     console.log(err);
// })


//  function getsomething(){
//     return new Promise((resolve , reject)=>{
//     console.log("Hii i am promise");
//     resolve("Success");
//     });
// }

// let mypromise = getsomething();
// mypromise.then((result)=>{
//     console.log("Resolve and "+result);
// }).catch((result)=>{
//     console.log("Reject and "+result);
// });

function getdata(dataid){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            console.log("data", dataid);
            resolve("Success");
        }, 4000);
    })
}