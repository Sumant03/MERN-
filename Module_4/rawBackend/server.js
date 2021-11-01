const express=require("express");
const fs= require("fs");

const app=express();
app.use(express.json());
app.get("/",function(req,res){
console.log("hello");
// res.send("<h1>Hi there</h1>")

let data=JSON.parse(fs.readFileSync("./data.json"));
res.json({
    message:data
})
})


app.post("/",function(req,res,next){

    console.log("before");
   return next()
})



app.post("/",function(req,res){
    console.log("after");
    let body=req.body;
    res.json({
        message:body
    })
})
let data=JSON.parse(fs.readFileSync("./data.json"));
// const userRouter=express.Router();
// const authRouter=express.Router();

// app.use('/user',userRouter);

// userRouter
// .route("/")
// .post(bodyChecker,getUser);

// function getUser(req,res){
//     let body = req.body;
//     console.log("req.body", req.body);
//     data.push(body);

// console.log("reached user");

// fs.writeFileSync("./data.json",JSON.stringify(data));
// res.json({message:data})
// }

// function bodyChecker(req,res,next){
//     let val= Object.keys(req.body).length;

//     if(val){
//         console.log("calling other function");
//         next()
//     }else{
//         console.log("getting error");
//     }
// }

app.listen(8080,function(){
    console.log("server started");
})