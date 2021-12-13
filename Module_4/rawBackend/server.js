// const express=require("express");
// const fs= require("fs");

// const app=express();
// app.use(express.json());
// app.get("/",function(req,res){
// console.log("hello");
// // res.send("<h1>Hi there</h1>")

// let data=JSON.parse(fs.readFileSync("./data.json"));
// res.json({
//     message:data
// })
// })


// app.post("/",function(req,res,next){

//     console.log("before");
//    return next()
// })



// app.post("/",function(req,res){
//     console.log("after");
//     let body=req.body;
//     res.json({
//         message:body
//     })
// })
// let data=JSON.parse(fs.readFileSync("./data.json"));
// // const userRouter=express.Router();
// // const authRouter=express.Router();

// // app.use('/user',userRouter);

// // userRouter
// // .route("/")
// // .post(bodyChecker,getUser);

// // function getUser(req,res){
// //     let body = req.body;
// //     console.log("req.body", req.body);
// //     data.push(body);

// // console.log("reached user");

// // fs.writeFileSync("./data.json",JSON.stringify(data));
// // res.json({message:data})
// // }

// // function bodyChecker(req,res,next){
// //     let val= Object.keys(req.body).length;

// //     if(val){
// //         console.log("calling other function");
// //         next()
// //     }else{
// //         console.log("getting error");
// //     }
// // }

// app.listen(8080,function(){
//     console.log("server started");
// })

const express =require("express");
const fs=require("fs");

const content =JSON.parse(fs.readFileSync("./data.json"))
const app=express();

app.use(express.json());

const userRouter=express.Router();
const authRouter=express.Router();


app.use('/user',userRouter);
app.use('/auth',authRouter);

userRouter
     .route('/')

     .get(getUser)
     .post(bodyChecker,createUser);


function getUser(req,res){
    res.json({message:content})
}

function bodyChecker(req,res,next){
    console.log("reached body checker");

    let isPresent =Object.keys(req.body).length;


    console.log("isPresent",isPresent);
    if(isPresent){
        next();
    }else{
        res.send("kindly send details in body");
    }

}

function createUser(req,res){
    console.log("create user");

    let body=req.body;

    console.log(body);
    content.push(body);

    fs.writeFileSync(".data.json",JSON.stringify(content));
    res.json({message:content});
}

app.listen(8081,function(){
    console.log("server started");
})


// two methods how next works 


//  1  .post(bodyChecker, isAuthenticated, isAuthorized, createUser);

//  2. app.post("/", function (req, res, next) {
//     let body = req.body;
//     console.log("inside first post", body);
//     next();
//       })
//     app.use(function (req, res, next) {
//     console.log("inside app.use",)
//     next();
//     })
//     app.get("/", function (req, res) {
//     app.post("/", function (req, res, next) {
//     let body = req.body;
//     console.log("inside second post", body);
//     next();
//       })