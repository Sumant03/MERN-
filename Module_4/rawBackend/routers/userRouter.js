const express =require("express");
const userRouter=express.Router();
const userModel=require("../models/userModel");
const {key}=require("../secrets");
const jwt = require('jsonwebtoken');
const {bodyChecker,protectRoute,isAuthorized}=require("./myMiddleWare");
const { next } = require("cheerio/lib/api/traversing");
const res = require("express/lib/response");
const {createElement,getElement,getElements,deleteElement,updateElement}=require("../helpers/factory");

userRouter
     .route('/')
     .get(protectRoute,isAuthorized(["admin","ce"]),getUsers)
     .post(bodyChecker,isAuthorized(["admin"]),createUser);


userRouter
.route("/:id")
    .get(getUser)
    .post(bodyChecker,isAuthorized(["admin","ce"]),updateUser)
    .delete(bodyChecker,isAuthorized(["admin"]),deleteUser)

    const createUser=createElement(userModel);
// async function createUser(req,res){
      
//     try{
//         let user=await userModel.create(req.body);
//         res.status(200).json({
//             "message":"user added in database",
//             data:user
//         })

//     }catch(err){
//         res.status(404).json({
//             "message":err.message
//         })
//     }
//     }


const getUsers=getElements(userModel);
// async function getUsers(req,res){
//         let user=await userModel.find();
//       try{
//         res.status(200).json({
//             user:user
//         })
//     }catch(err){
//         res.status(404).json({
//             "message":err.message
//         })
//     }
//     }

const getUser=getElement(userModel);
// async function getUser(req,res){
//     let {id}=req.params;
//     try{
//         let user=await userModel.findById(id);
//         res.status(200).json({
//             "message":"user found in database",
//             data:user
//         })

//     }
//     catch(err){
//         res.status(404).json({
//             "message":err.message
//         })
//     }
    
//     }
const updateUser=updateElement(userModel);
// async function updateUser(req,res){
//     let {id} =req.params;
//     console.log("1");
//     try{
//         console.log("2");
//         let user=await userModel.findById(id);
//         if(user){
//             console.log("3");
//             if(req.body.password&&req.body.confirmPassword){
//                 return res.json({
//                     "message":"use forget password instead"
//                 })
//             }
           
//             for(let key in req.body){
//                 user[key]=req.body[key];
//             }
//             await user.save({
//                 validateBeforeSave:false
//             });
//             console.log("4");
//             res.status(200).json({
//                 "message":"data updated",
//                 data:user
//             })
//         }

//     }
//     catch(err){
//         res.status(404).json({
//             "message":err.message
//         })
//     }
// }
const deleteUser=deleteElement(userModel);
// async function deleteUser(req,res){
//     let {id} =req.params;
//     try{
//          let user=await userModel.findByIdAndDelete(id);
//          res.status(200).json({
//              "message":"user data deleted ",
//              data:user
//          })
//     }
//     catch(err){
//         res.status(404).json({
//             "message":err.message
//         })
//     }
//     }



 //1.           this is find of closure function where (we have a function in background which contains roles and 
 //2.           there is an async function inside it can which get the role as an closure and can return its output )   


module.exports=userRouter;