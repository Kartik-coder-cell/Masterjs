//DOM -  docment object model
//DOM is a programming interface for web documents. 
// It represents the page so that programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//1. getElementById() - returns the element that has the ID attribute with the specified value.
//2. getElementsByClassName() - returns a collection of all elements in the document with the specified class name, as a NodeList object.
//3. getElementsByTagName() - returns a collection of all elements in the document with the specified tag name, as a NodeList object.
//4. querySelector() - returns the first element that matches a specified CSS selector(s) in the document.
//5. querySelectorAll() - returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.  

// let abc = document.getElementById("#abc");
// abc.textContent = "Hello World";

// let abc1 = document.getElementsByClassName(".abc");
// console.dir(abc1);

// let abc2 = document.querySelector("#abc");
// console.dir(abc2);

// let abc3 = document.querySelectorAll("#abc");
// console.dir(abc3);

//innerhtml - it is used to get the content of an element as HTML. It can also be used to set the content of an element as HTML.
//textContent - it is used to get the content of an element as text. It can also be used to set the content of an element as text.

// let abc4 = document.querySelector("#xyz");
// abc4.innerHTML = "<h1>Hello World</h1>";

// let abc5 = document.querySelector("#xyz");
// abc5.textContent = "Hello World";
