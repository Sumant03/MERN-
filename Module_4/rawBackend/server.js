const express =require("express");
const fs=require("fs");
const {key}=require("./secrets");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const app=express();
const userRouter=require("./routers/userRouter");
const authRouter=require("./routers/authRouter");
const planRouter=require("./routers/planRouter");



app.use(express.json());
app.use(cookieParser())
app.use(express.static("public"));


app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/plan',planRouter);

app.listen(8081,function(){
    console.log("server started");
})

//404 Error
app.use(function(req,res){
    res.status(400).sendFile('public/404.html',{root:__dirname})
})





