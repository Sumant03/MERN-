//fs=> file system 

const fs=require("fs"); //fs is a module in the form of object having key and value pair
console.log(fs);

let f1data=fs.readFileSync("./f1.txt","utf-8")
console.log(f1data)

 f1data=fs.readFileSync("./f1.txt")
console.log(f1data+" ")
fs.writeFileSync("./index.html","Hello World!!");

fs.writeFileSync("../activity/activity.js","adasudu")











