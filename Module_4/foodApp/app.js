const express=require('express');

//server creation
const app=express();

let port='8080';
app.listen(port,function(){
    console.log('hi there server started');
});

//types of request -> get post put delete

app.get('/',(req,res)=>{
    console.log(req);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
res.send('<h1>hello hi</h1>');
res.end();
})