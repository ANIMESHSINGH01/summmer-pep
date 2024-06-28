const obj1 = new Object();
const obj2 = {};

obj1.name = 'Animesh';
obj2.name = 'Ajay';

console.log(obj1);
console.log(obj2);

const obj3 = {
    name:"Ajay",
    "age" : 30,
    10:"ten",
    "city":"jaipur"
}
// console.log(obj3);
// let a = prompt();
// console.log(obj1[a]);

const o1 = {
    name:'Aman',
}

o1.name = 'Raj'
console.log(o1);

let u1 = "Akshay";
let u2 =u1;
u2 = "Raj";
console.log(u1);
console.log(u2);

// *****************************************************************************************

// const arr = ["fruits","banana","apple","orange"];
// for(let i=0;i<4;i++){
//     console.log(arr[i]);
// }
// for in loop will print key
// for(let i in arr){
//     console.log(i);
// }
// for of loop will only work on arrays and it only give values
// for(let i of arr){
//     console.log(i);
// }

const obj = {
    id:"12110858",
    name:'fruits',
    3:'three',
}
const arr=['apple','banana','mango','orange'];
for(let i=0;i<4;i++){
    console.log(obj[i]);
}

for(let i in obj){
    console.log(i);
}

window.console.log('Hello')