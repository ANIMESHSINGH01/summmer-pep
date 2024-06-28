// function sum(a=0,b=0){
//     return a+b;
// }

// function mul(a=1,b=1){
//     return a*b;
// }
// function sub(a=0,b=0){
//     return a-b;
// }

// function add2(a){
//     const res = sum(a,2)
//     return res;
// }
// module.exports = {add2,mul,sub};

// code for sum and mul

function calc(s, ...arr){
    // console.log(s, arr);
    let ans;
    if(s=='sum'){
        arr.reduce((acc,elem)=>acc+elem);
    }
    else{
        ans = arr.reduce((acc,elem)=>acc*elem);
    }
    return ans;
}

const a1 = calc('sum', 10,20,30,40);
const a2 = calc('mul', 10,20,30,40);
console.log(a1,a2);


