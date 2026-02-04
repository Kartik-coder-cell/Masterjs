//objects

let obj = {
    name: "kartik",
    age : 20,            //syntax
    city: "Nashik"     //here name age and city is key and kartik 20 nashik are the values 
};  

//accessing objects
obj.age; //or 
obj['age'];

//Nesting

let obj1 = {
    name : "kartik",
    age : 20,
    city : "nasik",
     address : {
        pin :234,           
        name : "pune",
        location : {
            lat :123,
            lang :378,
        },
     },
};
//accessing - obj1.address.location.lang  -- these is known as deep access

//solution to deep access
let {lat, lang} = obj1.address.location;
//now we can access lat and lang directly

//for in loop 
let obj3 = {
    age :20,
    name: "kartik",
    city:"nasik",
};
for(let key in obj3){
    console.log(key + " : " + obj3[key]);
}


//copynig objects
let obj4 = {
    age :20,
    name : "kartik",
    city:"nasik",   
}
let obj5 = {...obj4};
console.log(obj5);   //spread operator is used to copy objects

//or
let obj6 = Object.assign({}, obj4);
console.log(obj6);



//deep clone -- if object has nested objects and if we want to copy that object to another one 
// so that changes in new object should not reflect in old object 
let obj7 = {
    age:20,
    name:"kartik",
    address:{
        city:"nasik",
        pin:422001
    },
};
//so these is the solution for that
let obj8 = JSON.parse(JSON.stringify(obj7));
console.log(obj8);

//optional chaining 
let obj9 ={
    name:"kartik",
    age:20,
    address:{
        city:"nasik",
        pin:422001
    },
};

console.log(obj9?.address?.city); //if address is not present it will not give error it will return undefined
console.log(obj9?.contact?.phone); //it will return undefined instead of error

//computed values
let role = "admin";
let obj10 = {
    name:"kartik",
    age:20, 
    address :"nasik",
    [role] : "harshad",   //computed value
};
console.log(obj10.admin);

