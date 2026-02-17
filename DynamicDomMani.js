// //createelement - create an element dynamically

// // 1.appendchild - append the element to the parent

// let h1 = document.createElement("h1");
// h1.textContent = "This is a heading";
// document.body.append(h1);

// //2.prepend - add the element before the first child of the parent

// let h2 = document.createElement("h2");
// h2.textContent = "This is a subheading";
// document.body.prepend(h2);

// //3.remove - remove the element from the DOM

// let h3 = document.createElement("h3");
// h3.textContent = "This is a sub-subheading";
// document.body.append(h3);
// h3.remove();

// //4.replaceWith - replace an element with another element

// let h4 = document.createElement("h4");  
// h4.textContent = "This is a sub-sub-subheading";
// h3.replaceWith(h4);


//---------- style updates via styles -------------

let h1 =document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "black";
h1.style.textTransform = "capitalize";
h1.style.fontSize = "50px";
