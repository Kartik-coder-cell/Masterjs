//localstorage - a simple key-value storage mechanism that allows you to store data in the browser. It provides a way to store data persistently across sessions, meaning that the data will remain even after the browser is closed and reopened. LocalStorage is part of the Web Storage API and is supported by most modern browsers.

//1. Stroring data in localStorage
    // localStorage.setItem('key', 'value');

    // localStorage.setItem('name' , 'kartik');
    // localStorage.setItem('age' , '25');
    // localStorage.setItem('city' , 'delhi');

//2.retrieving data from localStorage
      // const value = localStorage.getItem('key');
      
    //   let val = localStorage.getItem('name');
    //   console.log(val); // Output: kartik

    //   let age = localStorage.getItem('age');
    //   console.log(age); // Output: 25

//3. Removing data from localStorage
       // localStorage.removeItem('key');      
    //    localStorage.removeItem('age');
    //    console.log(localStorage.getItem('age')); // Output: null

//4.update data in localStorage
       // localStorage.setItem('key', 'new value');
    //    localStorage.setItem('city', 'mumbai');
    //    console.log(localStorage.getItem('city')); // Output: mumbai
       
//5. Clearing all data from localStorage
          // localStorage.clear();
        //   localStorage.clear();       

//sesssionstorage - similar to localStorage, but the data stored in sessionStorage is only available for the duration of the page session. This means that the data will be lost when the browser tab is closed. SessionStorage is also part of the Web Storage API and is supported by most modern browsers.

//1. Storing data in sessionStorage
    // sessionStorage.setItem('key', 'value');
    // sessionStorage.setItem('name' , 'kartik');
    // sessionStorage.setItem('age' , '25');

//2. Retrieving data from sessionStorage
    // const value = sessionStorage.getItem('key');          
    // let sessionName = sessionStorage.getItem('name');
    // console.log(sessionName); // Output: kartik

    // let sessionAge = sessionStorage.getItem('age');
    // console.log(sessionAge); // Output: 25

//3. Removing data from sessionStorage
    // sessionStorage.removeItem('key');      
    // sessionStorage.removeItem('age');
    // console.log(sessionStorage.getItem('age')); // Output: null 
    
//4. Updating data in sessionStorage
    // sessionStorage.setItem('key', 'new value');
    // sessionStorage.setItem('name', 'mumbai');
    // console.log(sessionStorage.getItem('name')); // Output: mumbai

//5. Clearing all data from sessionStorage
    // sessionStorage.clear();
    // sessionStorage.clear(); 
    
//cookies - small pieces of data that are stored on the user's computer by the web browser. They are commonly used to store user preferences, session information, and other data that needs to persist across different pages or sessions. Cookies are sent to the server with every HTTP request, allowing the server to identify and track users.

//1. Setting a cookie
    // document.cookie = "key=value; expires=expiration_date; path=path; domain=domain; secure";
    // document.cookie = "name=kartik; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    // document.cookie = "age=25; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";  
    
//2. Retrieving a cookie
    // function getCookie(name) {
    //   const value = `; ${document.cookie}`;  
    //   const parts = value.split(`; ${name}=`);   
    //   if (parts.length === 2) return parts.pop().split(';').shift();
    // }
    
//json.stringify() - a method that converts a JavaScript object or value to a JSON string. It is commonly used to serialize data before sending it to a server or storing it in localStorage or sessionStorage.
// means we cant store data in localstorage in array, object so we use json.stringify() to convert it into string and then store it in localstorage or sessionstorage.

localStorage.setItem("frinds" , JSON.stringify(["kartik" , " om" , "Rahul"]));
localStorage.getItem("frinds"); // Output: '["kartik"," om","Rahul"]' - a string representation of the array



//json.parse() - a method that parses a JSON string and returns the corresponding JavaScript object or value. It is commonly used to deserialize data received from a server or retrieved from localStorage or sessionStorage.    