// custom modules
// external modules
// internal modules
// Steam is data packets and buffer is single packet(part of steam).
// in promise there is then and catch. In Callback there is only function called again.
// const fs = require("fs");

// console.log("Start")
// const data1= fs.readFileSync('./text.txt');
// const text1 = (data1.toString());
// console.log(text1);
// console.log("Mid");

// const data2 = fs.readFileSync('./text.txt',{encoding: "utf-8"});
// console.log(data2);
// console.log("End")

// const fs = require("fs");

// console.log("Start")

// fs.readFile('./text.txt',{encoding: "utf-8"},(err,data)=>{
//     if(err)console.log("error occurred",err);
//     else console.log(data);
// });
// console.log("End");

// const fs = require("fs");
// console.log("Start");
// const res = fs.writeFileSync('./newFile.txt',"Custom text from NodeJS");
// console.log(res);
// console.log("End");

// const fs = require("fs");
// console.log("Start");
// fs.writeFile('./newFile.txt',"Custom text from NodeJS" , (err,data)=>{
//     console.log(err,data);
// });
// console.log("End");

// const { appendFile } = require("fs");
// const fsPromises = require("fs/promises");

// console.log("start")
// fsPromises.readFile('./text.txt',{encoding: "utf-8"})

// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("Error:",err);
// })

// console.log("end");

// writeFile()
// fsPromises.writeFile('./textFileWrite.txt',"Dummy Text\n").then(()=>{
//     console.log("Write Done!")
// }).catch((err)=>{
//     console.log("Error:",err);
// })

// appendFile
// fsPromises.appendFile('./textFileWrite.txt',"Dummy Text\n").then(()=>{
//     console.log("Append Done!")
// }).catch((err)=>{
//     console.log("Error:",err);
// })

// readFile and do addition on json mathScore
const fsPromises = require("fs/promises");

const pr = fsPromises.readFile("./data.json");

const getObjectById = (id, arr) => {
    // Method 1
//   for(let i = 0;i<arr.length;i++){
//       if(arr[i].id === id){
//           return arr[i];
//       }
//   }
 
//   Method2
//     const res = arr.filter((elem) => elem.id === id);
//     return res;
//   };

// Method3

//   const res = arr.find((elem)=>{
//       if(elem.id === id)return true;
//       else return false;
//   });
//   return res;
// };
pr.then((bf) => {
  const text = bf.toString();
  const arr = JSON.parse(text);
//   let mt = 0,
//     st = 0;
//   for (let i = 0; i < arr.length; i++) {
//     mt += arr[i].MathsScore;
//     st += arr[i].ScienceScore;
//   }
//   console.log("Maths score is", mt);
//   console.log("Science score is", st);

  const obj = getObjectById(3, arr);
  console.log(obj);
})
.catch(console.log);
