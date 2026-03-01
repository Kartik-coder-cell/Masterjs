//Asynchronoud javascript allows us to run code without blocking the main thread. This is particularly useful for tasks that take a long time to complete, such as fetching data from an API or performing complex calculations.
//it allows js to start a long task but not wait for it . instead it continuting executing other code and come back when the task is done

console.log("1.start");
setTimeout(function(){
    console.log("Heyy i am execute after 3 seconds");
}, 3000);

console.log("2.End");

//so here what happens code not execute line by line settimeout takes 3 sec to execute so asynchronous js allows to run this after running next code.