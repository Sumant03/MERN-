const express =require("express");
const userRouter=express.Router();
const userModel=require("../models/userModel");
const {key}=require("../secrets");
const jwt = require('jsonwebtoken');
const {bodyChecker,protectRoute}=require("./myMiddleWare")
userRouter
     .route('/')
     .get(protectRoute,getUsers)
     .post(bodyChecker,createUser);


userRouter
.route(":/id")
    .get(getUser)
    .post(bodyChecker,updateUser)
    .delete(bodyChecker,deleteUser)

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
    try{

        let user=await userModel.findById(id);
        if(user){
           
            for(let key in user){
                user[key]=req.body[key];
            }
            await user.save();
            res.send(200).json({
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
module.exports=userRouter;