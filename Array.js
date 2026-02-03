//Array
 
let arr =[10,20,30,40]; //create array

arr[2];
arr[1];   ///access array

arr[2] = 60;  //modify array

//Array methods

arr.push();
arr.pop();
arr.shift();
arr.unshift(5);
arr.indexOf(20);
arr.length;
arr.slice(1,3);
arr.splice(1,2);
arr.reverse();
arr.sort();

let arr = [10,2,41,56,76,64];
let newarr = arr.sort(function(a,b){  //acsending order
    return a-b;
});

let arr2 = [12,2,34,43,12,2];
let newvar = arr2.sort(function(a,b){
    return b-a;                           //descending order
});


//foreach loop
let arr3 = [10, 39,20,30,29,38];
arr3.forEach(function(num){
    console.log(num);
});

//imp methods
//1.map() method - it creates a new array using your previous array data

let arr = [11,23,24,10,20,30];
let newarray = arr.map(function(value){
    if(value > 15){
        return value;                       
    }else{
        return 12;
    }
});
console.log(newarray);


//2.filter()- it not returns all the array only some of are taken according to the condition and it returns only true and false 
let arr4 = [10,12,34,11,19,10];
let narray = arr4.filter(function(value){
    if(value > 20){
        return true;
    }
});
console.log(narray);


//3.reduce() - when we want only one value of entire array 
let arr5 = [10,20,30,40,50];
let newarray1 = arr5.reduce(function(accumalator , value){
    return accumalotor + value;
});
console.log(newarray1);


//4.find() - find a value and return

let narray1 = [12,40,30,20,30,38];
let newarray2 = narray1.find(function(value){
    if(value == 38){
        return value;
    }
});
console.log(newarray2);

//5.some() - is that element is present in an array or not?

let n = [10,20,30,40,50,60,70,80];
let na = n.some(function(value){
    return value>40;
});
console.log(na);

//6.every() - Every element should pass the condition

let m =[10,20,30,40,50,60];
let ma = m.every(function(value){
    return value > 30;
});
console.log(ma);

