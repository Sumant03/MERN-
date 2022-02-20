const express =require("express");
const key=require("../secrets");
const jwt = require('jsonwebtoken');
const userModel=require("../models/userModel");


function protectRoute(req,res,next){
    try{
        console.log("reached protectRoute");
        // console.log(req.body);
        console.log(req.cookies.JWT);
        let decryptedToken = jwt.verify(req.cookies.JWT,key.key);
        console.log("61",decryptedToken);
        
        
        if(decryptedToken){
            let userId=decryptedToken.id;
            req.userId=userId;
            next();
        }else{
            res.send("kindly send details in body");
        }
    }catch(err){ 
        console.log("error",err);
    res.status(400).send({message:err.message})
}

}

function bodyChecker(req,res,next){
    console.log("reached body checker");
    // console.log(req.body);
    let isPresent =Object.keys(req.body).length;
    console.log("isPresent",isPresent);
    if(isPresent){
        console.log("1");
        next();
    }else{
        res.send("kindly send details in body");
    }

}


function isAuthorized(roles){
    console.log("I will run when server started ");
return async function(req,res,next){
    console.log("userID = ",req.userId);
    let {userId}=req;
       console.log(req.body);
    console.log("Now function is called");
    try{
   console.log(req.body);
    let user =await userModel.findById(userId);
    console.log("user",user);
    let userisAuthorized=roles.includes(user.role);
   
    //  console.log("check",userisAuthorized);
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
        "message":"user not authorized",
        err:err.message
    })
}
}
}


module.exports={protectRoute,bodyChecker,isAuthorized};