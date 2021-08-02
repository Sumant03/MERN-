//server is created
const express=require('express');
const app=express();

//GEt Method with route /
// app.get("/",function(request,response){
//     response.send("<h1>Welcome to my app</h1>")
// })
const http=require("http");
const { connected } = require('process');
const server=http.createServer(app);
const {Server} =require("socket.io");
const io =new Server(server);

app.use(express.static("public"));

io.on("connection",function(socket){
    console.log("socket.id,Socket connected");
})


server.listen(4000,function(){
    console.log("App started at port 4000");
})