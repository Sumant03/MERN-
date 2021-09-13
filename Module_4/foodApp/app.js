const express=require('express');
const app=express();

let port=8080
app.listen(port,function(){
    console.log('hi there server started');
});

// app.get('/',(req,res)=>{

// })