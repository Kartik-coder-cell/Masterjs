//Control Flow Statements

//1. If...Else Statement    
// let age = 20;
// if (age < 18) {
//     console.log("Minor");
// } else {
//     console.log("Adult");
// }
// Output: Adult

//2. Switch Statement
// let day = 3;    
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;      
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;      
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log(dayName);
// Output: Wednesday

//3. Ternary Operator
// let score = 85;
// let grade = (score >= 60) ? "Pass" : "Fail";
// console.log(grade);
// Output: Pass

//4.if...Else If Statement
// let marks = 75;
// if (marks >= 90) {   
//     console.log("A");
// } else if (marks >= 75) {
//     console.log("B");
// } else if (marks >= 60) {
//     console.log("C");
// } else {
//     console.log("F");
// }
// Output: B        

//5. Nested If Statement
// let num = 15;   
// if (num > 0) {
//     if (num % 2 === 0) {
//         console.log("Positive Even Number");    
//     } else {
//         console.log("Positive Odd Number");
//     }
// } else {    
//     console.log("Non-positive Number");
// }
// Output: Positive Odd Number


// * Early return pattern
// function checkEligibility(age) {
//     if (age < 18) {
//         return "Not Eligible";
//     }
//     // Further processing for eligible candidates
//     return "Eligible";
// }