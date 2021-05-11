const fs=require("fs");
console.log("start");

let f1kaContent=fs.readFileSync("./f1.txt");

console.log(f1kaContent);
console.log("end");
