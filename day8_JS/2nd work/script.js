// const pr = new Promise((resolve,reject)=>{
//     // ...
//     let flag = true;
//     // ...

//     if(flag===true){
//         setTimeout(()=>{
//             resolve(["apple","mango"])
//         },4000);
//     }
//     else{
//         reject("Not done");
//     }
// });

// setTimeout(()=>{
//     console.log("done");
// },4000);



// pr.then((val,e)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })


// let cnt = 0;
// let id;

// const cb = ()=>{
//     cnt++;
//     console.log("Done",cnt);
//     if(cnt == 4){
//         clearInterval(id);
//     }
// };
// const time = 1000;

// id = setInterval(cb, time);

// const arr = ["apple","orange","mango"];

// const str = arr.toString();
// console.log(str);
// console.log(str[0]);
// console.log(arr.at(0));
// console.log(arr.join(' '));
// console.log(str[2]);


// console.log(arr.shift());
// console.log(arr);

// console.log(arr.unshift('kiwi'));
// console.log(arr);

// delete arr[0];
// console.log(arr);
// console.log(arr.length)

// const arr2 = [1,2,3,[4,[5]],[6]];
// console.log(arr2.flat());
// console.log(arr2);


// SPLICE

// const arr = ["A","B","C","D"];
// arr.splice[0,1];
// arr.splice[3,1];
// arr.splice[1,2];
// arr.splice[2,0,"X","Y","Z"];
// console.log(arr);


// const res1 = arr.forEach((a,b,c)=>{
//     // console.log(a,b,c);
//     return "OK";
// });

// const res2 = arr.map((a,b,c)=>{
//     // console.log(a,b,c);
//     return a+a;

// })
// console.log(res1);
// console.log(res2);

// if(arr == res2){
//     console.log("OK");
// }

// else{
//     console.log("Not Ok")
// }

// const arr = ["A","BC","CD","D"];
// const res3 = arr.filter((a,b,c)=>{
//     if(a.length==1){
//         return true;
//     }
//     return false;

// });
// console.log(res3);


const arr = ["A","BC","CD","D"];
const res3 = arr.filter((a,b,c)=>{
    if(b%2==0){
        return true;
    }
    return false;

});
console.log(res3);
