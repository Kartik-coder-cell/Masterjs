// //for loop
// for (let i = 0; i < 5; i++) {
//     console.log("For Loop iteration: " + i);
// }

// //while loop
// let j = 0;  
// while (j < 5) {
//     console.log("While Loop iteration: " + j);
//     j++;
// }

// //do...while loop
// let k = 0;  
// do {
//     console.log("Do...While Loop iteration: " + k);
//     k++;       
// } while (k < 5);

// //for...in loop
// const person = {name: "Alice", age: 25, city: "New York"};
// for (let key in person) {
//     console.log(key + ": " + person[key]);                           //used with objects
// }       

// //for...of loop
// const colors = ["red", "green", "blue"];    
// for (let color of colors) {
//     console.log("Color: " + color);                   //used with iterable objects like arrays
// }

// //break statement
// for (let m = 0; m < 10; m++) {
//     if (m === 5) {  
//         break;
//     }   
//     console.log("Break Loop iteration: " + m);
// }   

// //continue statement
// for (let n = 0; n < 10; n++) {
//     if (n % 2 === 0) {      
//         continue;
//     }
//     console.log("Continue Loop iteration (odd numbers only): " + n);
// }

// //nested loops
// for (let p = 1; p <= 3; p++) {
//     for (let q = 1; q <= 2; q++) {
//         console.log("Nested Loop iteration: p=" + p + ", q=" + q);
//     }   
// }   

// //labeled statement
// outerLoop:  
// for (let r = 1; r <= 3; r++) {  
//     for (let s = 1; s <= 3; s++) {
//         if (r === 2 && s === 2) {  
//             break outerLoop;  
//         }
//         console.log("Labeled Loop iteration: r=" + r + ", s=" + s);
//     }
// }


// //forEach loop
// const numbers = [10, 20, 30, 40, 50];   
// numbers.forEach(function(number) {
//     console.log("forEach Loop number: " + number);
// });
