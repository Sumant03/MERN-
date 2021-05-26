// async => it can used before a function name
// await => it can only be used inside a async function

// IIFE => immediately called function expression

// console.log("start");
// function callMe(){
//     console.log("Hello")
// }
// callMe();
// console.log("end");
const fs=require("fs");

console.log("start");
async function callMe(){
  try{
    console.log("Hello")
  let f1kadata=await fs.promises.readFile("./f1.txt"," ");
  let f2kadata=await fs.promises.readFile("./f2.txt"," ");
  let bothfilePromise=await Promise.all([f1kadata,f2kadata]);
  console.log(bothfilePromise);
}
catch{

}
}
callMe();
console.log("end");