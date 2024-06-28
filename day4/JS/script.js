console.log("working...");

console.log(age); 
// in the above line if we access before declaration then it will give an error called as undefined
var age = 18;  //assigning/intializing value of age,scope of var variable is functional i.e. we can redeclare it
console.log(age);

let username = "Ani";
console.log(username);

username = "Animesh"
console.log(username);

// let username = "Ani"; let cannot be redeclared,block scope is smaller than the functional scope
// console.log(username);
// age = 19; //reassigning value of age
// console.log(age);

// var age = 20;
// console.log(age);