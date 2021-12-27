const express =require("express");
const fs=require("fs")
const authRouter=express.Router();
const userModel=require("../models/userModel");
const key=require("../secrets");
const jwt = require('jsonwebtoken');
const {bodyChecker,protectRoute}=require("./myMiddleWare")
const content =JSON.parse(fs.readFileSync("./data.json"))
const emailSender=require("../helpers/emailSender");
const { networkInterfaces } = require("os");



authRouter
    .route("/signup")
    .post(bodyChecker,signUp);
authRouter
    .route("/login")
    .post(bodyChecker,loginUser);
authRouter
    .route("/forgetPassword")
    .post(bodyChecker,forgetPassword);
authRouter
    .route("/resetPassword")
    .post(bodyChecker,resetP);

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
async function forgetPassword(req,res){

              
        try {
            let { email } = req.body;
            // search on the basis of email
            let user = await userModel.findOne({ email })
            if (user) {
                let token = (Math.floor(Math.random() * 10000) + 10000)
                    .toString().substring(1);
                await userModel.updateOne({ email }, { token })
                let newUser = await userModel.findOne({ email });
                // console.log("newUser", newUser)
                // email
                // email send
                await emailSender(token, user.email);
    
                res.status(200).json({
                    message: "user token send to your email",
                    user: newUser,
                    token
                })
            } else {
                res.status(404).json({
                    message:
                        "user not found with creds"
                })
            }
            // create token
            // -> update the user with a new token 
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: err.message
            })
        }
          }
async function resetP(req,res){
            let {token,password,confirmPassword}=req.body;
              
            try {
                
                // search on the basis of email
                let user = await userModel.findOne({ token })
                if (user) {

                    if(user.validUpto+300<Data.now()){
                      return;
                    }
                    
                    this.password=password;
                    this.confirmPassword=confirmPassword;
                    this.token=undefined;
                    user.save();

                    let newUser = await userModel.findOne({email:user.email });
                    console.log("cred saved");
        
                    res.status(200).json({
                        message: "user token send to your email",
                        user: newUser,
                        token
                    })
                } else {
                    res.status(404).json({
                        message:
                            "user not found with creds"
                    })
                }
                // create token
                // -> update the user with a new token 
            } catch (err) {
                console.error(err);
                res.status(500).json({
                    message: err.message
                })
            }
              }                


module.exports=authRouter;