let age = 18;
let username1 = "ajay";
let username2 = "dev";

let a = username1 + '' + username2;
let b =  10 + username1;
let c = username1 - 10; //here - will not work only + will work and it add the value next to it


console.log(a);
console.log(b);
console.log(c);

let r = 10+12+14+" hello";
console.log(r);
console.log(typeof(r));

let v1 = '10';
let v2 = 10;

// double equal to will check the values are equal or not
if(v1==v2){
    console.log("YES");
}
else{console.log("NO");}


// triple equal to will check for datatypes and values
if(v1===v2){
    console.log("YES");
}

else{
    console.log("NO");
}

// let u1 = "Ajay"
// let u2 = "Dev"

// let ans1 = u1+" "+ u2;
// let ans2 = 


// ***************************FUNCTIONS******************************
// function definition with funtion keyword
function printHello() {
    console.log('Hello')
}
// Funtion invocation

printHello('Ajay');

// named function assignment
const pH = function printHi(x){
    console.log('Hi',x);
}
pH('Ajay');
// print Ajay

// anonymous function assginment
const pHi = function (x){
    console.log("Hii",x);
}
pHi("Ajay");


// arrow function assignment
const pHii = (x)=>{
    console.log('Hiii',x);
}
pHii("Ajay");

function Sum(a,b){
    const ans = a+b;
    console.log(ans);
}

const mul = (a,b)=>{
    const ans = a*b;
    console.log(ans);
}

// mul = (b,c,d) =>{
//     const ans = b*c*d;
// }
Sum(10,20);
mul(20,40);

const f = 20;
if (f<30){
    console.log("f is greater than 20");
}
else{
    console.log("f is less than 20");
}

const check  = (a)=>{
    if(a<30){
        console.log("a is less than 30");
    }
    else{
        console.log("a is greater than 30")
    }
}

