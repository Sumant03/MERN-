const express =require("express");
const fs=require("fs")
const authRouter=express.Router();
const userModel=require("../models/userModel");
const key=require("../secrets");
const jwt = require('jsonwebtoken');
const {bodyChecker,protectRoute}=require("./myMiddleWare")
const content =JSON.parse(fs.readFileSync("./data.json"))
authRouter
    .route("/signup")
    .post(bodyChecker,signUp);
authRouter
    .route("/login")
    .post(bodyChecker,loginUser);
authRouter
    .route("/forgetPassword")
    .post(bodyChecker,forgetPassword);

async function signUp(req,res){
        try{
      
          let newUser = await userModel.create(req.body);
          res.status(200).json({
              "message":"user created successfully",
              user:newUser
          })
        }catch(err){
            res.status(500).json({
                "message":"data invalid",
                err:err.message
            })
        }
          
          }
async function loginUser(req,res){
    let {email,password}=req.body;

    try{
        let user= await userModel.findOne({email});
        if(user){
              if(user.password==password){
                  let token =jwt.sign({id:user["_id"]},key.key);

                  res.cookie("JWT",token);
                  res.status(200).json({
                      "message":"user logged In",
                      data:user
                  })
              }else{
                res.status(400).send({
                    "message":"1 .email or password incorrect"
                }) 
              }
                
        }else{
            res.status(400).send({
                "message":"2. email or password incorrect"
            })
        }          

        }catch(err){
            res.status(400).send({
                "message":"email or password incorrect"
            })
        }
      }

module.exports=authRouter;