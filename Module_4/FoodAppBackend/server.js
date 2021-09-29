const express=require("express");
const { fstat } = require("fs");

const app=express();

app.get("/",function(req,res){
console.log("hello");
// res.send("<h1>Hi there</h1>")

let data=JSON.parse(fs.readFileSync("./data.json"));
res.status(200).json({
    message:data
})
})

app.listen(8080,function(){
    console.log("server started");
})