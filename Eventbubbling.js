// let ul = document.querySelector("ul");
// ul.addEventListener("click" , function(val){
//     val.target.classList.toggle("td");
// });

//event bubbling is a type of event propagation in which the event starts from the target element and then propagates up to the parent elements. In event bubbling, the event is first captured by the target element and then propagated up to the outermost element. This means that if you have multiple nested elements, the event will be triggered on each of those elements as it bubbles up.

let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let button = document.querySelector("button");

div1.addEventListener("click" , function(){
    console.log("div1 clicked");
}, true);

div2.addEventListener("click" , function(){
    console.log("div2 clicked");
}, true);

div3.addEventListener("click" , function(){
    console.log("div3 clicked")
}, true);

button.addEventListener("click" , function(){
    console.log("Button clicked");
}, true);

//event capturing is the opposite of event bubbling. In event capturing, the event is first captured by the outermost element and then propagated down to the target element. In event bubbling, the event is first captured by the target element and then propagated up to the outermost element.