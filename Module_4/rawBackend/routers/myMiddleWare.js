const express =require("express");
const key=require("../secrets");
const jwt = require('jsonwebtoken');

function protectRoute(req,res,next){
    try{
    console.log("reached body checker");
    // console.log(req.body);
   console.log(req.cookies.JWT);
    let decryptedToken = jwt.verify(req.cookies.JWT,key.key);
    console.log("61",decryptedToken);
    console.log(req.cookies);
   console.log(decryptedToken);
  
    if(decryptedToken){
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
    console.log(req.body);
    let isPresent =Object.keys(req.body).length;
    console.log("isPresent",isPresent);
    if(isPresent){
        console.log("1");
        next();
    }else{
        res.send("kindly send details in body");
    }

}



module.exports={protectRoute,bodyChecker};