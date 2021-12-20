const express =require("express");
const userRouter=express.Router();
const userModel=require("../models/userModel");
const {key}=require("../secrets");
const jwt = require('jsonwebtoken');
const {bodyChecker,protectRoute}=require("./myMiddleWare");
const { next } = require("cheerio/lib/api/traversing");
const res = require("express/lib/response");
userRouter
     .route('/')
     .get(protectRoute,isAuthorized(["admin","ce"]),getUsers)
     .post(bodyChecker,isAuthorized(["admin"]),createUser);


userRouter
.route("/:id")
    .get(getUser)
    .post(bodyChecker,isAuthorized(["admin","ce"]),updateUser)
    .delete(bodyChecker,isAuthorized(["admin"]),deleteUser)

async function createUser(req,res){
      
    try{
        let user=await userModel.create(req.body);
        res.status(200).json({
            "message":"user added in database",
            data:user
        })

    }catch(err){
        res.status(404).json({
            "message":err.message
        })
    }
    }
async function getUsers(req,res){
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
async function getUser(req,res){
    let {id}=req.params;
    try{
        let user=await userModel.findById(id);
        res.status(200).json({
            "message":"user found in database",
            data:user
        })

    }
    catch(err){
        res.status(404).json({
            "message":err.message
        })
    }
    
    }

async function updateUser(req,res){
    let {id} =req.params;
    console.log("1");
    try{
        console.log("2");
        let user=await userModel.findById(id);
        if(user){
            console.log("3");
            if(req.body.password&&req.body.confirmPassword){
                return res.json({
                    "message":"use forget password instead"
                })
            }
           
            for(let key in req.body){
                user[key]=req.body[key];
            }
            await user.save({
                validateBeforeSave:false
            });
            console.log("4");
            res.status(200).json({
                "message":"data updated",
                data:user
            })
        }

    }
    catch(err){
        res.status(404).json({
            "message":err.message
        })
    }
}
async function deleteUser(req,res){
    let {id} =req.params;
    try{
         let user=await userModel.findByIdAndDelete(id);
         res.status(200).json({
             "message":"user data deleted ",
             data:user
         })
    }
    catch(err){
        res.status(404).json({
            "message":err.message
        })
    }
    }
 function isAuthorized(roles){
     console.log("I will run when server started ");
 return async function(){
     let {userId}=req;
       
     try{
     let user =await userModel.findById(userId);
     let userisAuthorized=roles.includes(user.role);

     if(userisAuthorized){
         next();
     }else{
         res.json({
             "Message":"user not authorized"
         })
     }
 }
 catch(err){
     res.json({
         "Message":"user not authorized"
     })
 }
}
 }
module.exports=userRouter;