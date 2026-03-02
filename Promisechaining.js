//promise chaining - it means that we can call the then method on a promise and return another promise from it, which allows us to chain multiple asynchronous operations together.

//the most imp rule is that we should always return a promise from the then method, otherwise the chaining will break and we won't be able to catch any errors that occur in the chain.

function getadata(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid);
            resolve("Success");
        }, 3000);
    })
}
console.log("Fetching data 1...");
getadata(1).then((res) => {
    console.log("Fetching data 2...");
    return getadata(2);
}).then((res) => {

    console.log("Fetching data 3...");
    return getadata(3);
}).then((res) => {
  console.log(res);
}).catch((err) => {
    console.log(err);
})
//in this example, we are calling the getadata function three times in a chain, and each time we are returning a new promise from the then method. This allows us to handle any errors that may occur in any of the promises in the chain using the catch method at the end.