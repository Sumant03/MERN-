const express =require("express");
const userRouter=express.Router();
const userModel=require("../models/userModel");
const {key}=require("../secrets");
const jwt = require('jsonwebtoken');
const {bodyChecker,protectRoute}=require("./myMiddleWare")
userRouter
     .route('/')

     .get(protectRoute,getUser)
     .post(bodyChecker,createUser);

function createUser(req,res){
        console.log("create user");
    
        let body=req.body;
    
        console.log(body);
        content.push(body);
    
        fs.writeFileSync(".data.json",JSON.stringify(content));
        res.json({message:content});
    }
async function getUser(req,res){
        let user=await userModel.find();
      try{
        res.status(200).json({
            user:user
        })
    }catch(err){
        res.status(404).json({
            "message":err.message
        })
    }
    }
module.exports=userRouter;