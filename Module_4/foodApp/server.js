const express=require('express');

//server creation
const app=express();

app.use(express.json());
let port='5000';
app.listen(port,function(){
    console.log('hi there server started');
});

//types of request -> get post put delete

app.get('/',(req,res)=>{
    console.log(req);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
res.send('<h1>server 5000</h1>');

})
let obj={'name':'Sumant'}

app.get('/user',(req,res)=>{
    
res.send(obj);

})
let user={};
app.post('/user',(req,res)=>{
    user=req.body;
    console.log(req.body);
    res.send('data has been added')
})

app.patch('/user',(req,res)=>{
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];

    }
    console.log(req.body);
    res.json(user)
})

app.delete('/user',(req,res)=>{
    user={};
    res.json(user)
})