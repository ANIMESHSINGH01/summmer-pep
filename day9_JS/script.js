// const student = {
//     name: 'Animesh',
//     rollNo: '24001',
//     city: 'Delhi'
// }
// // console.log(student.name);

// const{name, city}= student;
// // const{userName} = student;
// console.log(name,city);

// const fruits = ['Banana','Apple','Orange'];
// console.log(fruits[0]);
// const[,i2,i3] = fruits; //initializing i1 with banana and i2 with apple
// console.log(i2,i3);

// const student = {
//   userName: "Animesh",
//   rollNo: "24201",
//   city: "Delhi",
//   hobbies: ["Painting", "Styling", "Driving"],
// };
// const { hobbies } = student;
// hobbies[0] = "Studying";

// console.log(hobbies);
// console.log(student);

// *******************REST AND SPREAD OPERATORS*****************
// REST --> used to pack the values
// SPREAD --> used to unpack the values

// const s1 = {
//     userName: "Animesh",
//     rollNo: "24201",
//     city: "Delhi",
//     hobbies: ["Painting", "Styling", "Driving"],
//   };

//   const s2 = {...s1}; //spreading the object
//   s2.userName = 'Ajay';

//   console.log(s1);
//   console.log(s2);

// code

// function sum(...arr){ //by ... we are containing all comma seperated array into a container
//     // console.log(a);
//     console.log(arr);

// const res = arr.reduce((acc,elem,idx)=>{
//         console.log(acc,elem,idx);
//         return acc+elem;
//     },-1);
//     console.log('---->',res);
// }

// arguments with comma seperated (so it will come in array category)
// sum()//-->0
// sum(10)//-->10
// sum(10,20)//-->30
// sum(10,20,11)//-->41
// sum(1,2,10,4)//-->17
// sum(2,4,5,10,2)//-->23

// REDUCE FUNCTION reduces whole array into a single value
// and assume first indexed value as default value

// console.log('start')
// async function getData(){
//     console.log('inside')
//     const res = await fetch("https://dummyjson.com/products")
//     console.log('step1')
//     const data = await res.json();
//     console.log(data);
// }
// getData();
// console.log('end')

const ans = ['1','2','3','4'].map(console.log);