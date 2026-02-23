// Eventlistener is a function that will be called when an event occurs. It is used to handle events such as clicks, mouse movements, and keyboard input.
// There are two ways to add an event listener to an element: using the addEventListener() method or using the on event property.
// 1.addEventListener() method: This method takes two arguments: the type of event to listen for and the function to call when the event occurs. For example:
// document.getElementById("myButton").addEventListener("click", function() {
//    alert("Button clicked!");

// common steps
// 1.select the paragraph first
// 2.think what action to perform
// 3.then think aboutt reaction

// let para =document.getElementById("para");
// para.addEventListener("click", function(){
//     para.style.color="red";
// });

// para.addEventListener("dblclick", function(){
//     para.style.color="blue";
// });

// let inp = document.getElementById("input");
// inp.addEventListener("input", function(event){
//     if(event.data != null){
//         console.log("You entered: " + event.data);
//     }
// });
    
// let h1 = document.querySelector("h1");
// let sel = document.querySelector("select");
// sel.addEventListener("change", function(val){
//     h1.textContent = `${val.target.value} is selected`; 
// });

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(val){
//      if(val.key === " "){
//         h1.textContent = "SPC";
//      }else{
//         h1.textContent = val.key;
//      }
// });

// let div = document.querySelector(".mouse");
// window.addEventListener("mousemove", function(val){
//     div.style.top = val.clientY+"px";
//     div.style.left = val.clientX+"px";
// });

// let div = document.querySelector(".mouse");
// div.addEventListener("mouseover", function(val){
//     div.style.backgroundColor = "Yellow";   
// });

// div.addEventListener("mouseout", function(val){
//     div.style.backgroundColor = "red";
// });

// and like that we have many events like mouseover, mouseout, mousemove, keyup, keydown, change, input, submit, focus, blur, etc. We can use these events to create interactive web pages.

// Event object: When an event occurs, an event object is created and passed to the event listener function. This object contains information about the event, such as the type of event, the target element, and any additional data related to the event. For example, in a click event, the event object will contain information about the mouse position and the element that was clicked. We can use this information to perform specific actions based on the event.

// let h1 = document.querySelector("h1");
// h1.addEventListener("click" , function(val){  // So here val is our event object 
//     h1.textContent = "Kartik";
// })