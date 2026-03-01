//Object Oriented Programming
//Here we create factories, means ki aap ek baar blueprint bana do ki har object kaisa dikhega and hum log naye naye objects with different values bana payenge
//yahi upr upr se pura kaam hei oops mein

// function createPencil(name, color, price, company){
//     this.name = name;
//     this.color = color;
//     this.price = price;     //here the value of this is window but after using new it becomes blank object
//     this.company = company;
// }
// let pencil1 = new createPencil("Nataraj", "Black", 10, "Nataraj");

//new - it creates a blank object
//then value of this becomes new so it becomes a blank object

//the function which is called using new then the function is known as constructor function

//Prototype - if a field is common in all objects so it takes more memoery so we used prototype to make these field common to all objects 
//prototype - shared memory

// function abc(name , age){
//     this.name = name;
//     this.age = age;
   
// }
// abc.prototype.company = "kartikgoogle";

// let a1 =new abc("kartik" , 20);
// let a2 =new abc("Om" , 21);

//class - classes in js are a special way to create objects along with their properties and methods easily.

// class Emp{
//     constructor(name, age, salary){
//         this.name = name; 
//         this.age = age;
//         this.salary = salary;
//     }
//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = "red";
//         document.body.appendChild(h1);
//     }
// }
// let e = new Emp("kartik" , 20, 120000);
// let e1 = new Emp("Om" , 20, 2000000);

//imp about classes
//1.constructor - automatically called when object is created, used to initialize variables

//2.methods - (function inside class)

// class Bankaccount{
//     constructor(name, balance){
//         this.name = name;
//         this.balance = balance;
//     }
//     deposit(amount){
//         this.balance += amount;
//         console.log("Deposited = "+amount);
//     }

//     withdraw(amount){
//         this.balance -= amount;
//         console.log("Withdraw :"+amount);
//     }
   
// }

// let acc = new Bankaccount("Kartik", 20000);
// acc.deposit(500);
// acc.withdraw(300);

//inheritance - it allows one classs to acquire properties of another class

// class Animal{
//     speak(){
//        console.log("Animal is speaking")
//     }
// }

// class Bird extends Animal{
//     fly(){
//         console.log("Birds can fly");
//     }
// }

// let b = new Bird();
// b.speak();
// b.fly();


//super() - super keyword is used to call parent class constructor and methods

// class User{
//     constructor(name, age, email, address){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.address = address;
//         this.role = "user";
//     }

//     checkRole(){
//         return `You are a${this.role}`;
//     }

//     writ(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = `${this.name} : ${text}`;
//         document.body.appendChild(h1);
//     }
// }

// class Admin extends User{
//     constructor(name, age, email, address){
//         super(name,age,email,address);
//         this.role = "Admin";
//     }
//     remove(){
//         document.querySelectorAll(h1).forEach(function(ele){
//             ele.remove();
//         });
//     }
// }

// let u1 = new User("kartik" , 20, "Kartik@gmail.com" , "Nasik");
// let u2 = new User("jeet" , 20, "rohan@gmail.com" , "pune");
// let u3 = new User("rohan" , 20, "jeet@gmail.com" , "jalgaon");

// let a = new Admin("Kiru", 25 , "Admin@gmail.com", "london");

//prototypal inheritance - we have an object. if you want you can inherit their properties/methods in another object.

// let coffee = {
//     color :"bitter",
//     drink : function(){
//         console.log("Heyy sip it up");
//     },
// };

// let coffee1 = Object.create(coffee);
//     coffee1.taste = "sweet";
//     coffee1.drink();

//Encapsulation - it is the process of hiding the internal details of an object and only exposing a public interface to interact with it. It helps in data hiding and abstraction.
//wrapping up of data and functions in a single unit is reffers to the encapsulation and restricting direct access to the some of the data 

class Bankaccount{
    #balance = 0;  //private variable

    deposite(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance -= amount;
        }
    }
    getbalance(){
        this.#balance;
    }
}

let user = new Bankaccount();
user.deposite(1000);
console.log(user.getbalance());
console.log(user.balance);  //error cant access private variables directly
//so why this is encapsulation, bcoz #balance is hidden you can access it only using methods