const express=require('express');
const userModel=require("./models/userModels")
const app=express();
// const router=express.Router();
app.listen('5000',function(){
    console.log('server listening on port 5000');
});

app.use(express.json());
// app.use((req,res,next)=>{
//     //do some work
//     console.log('i am a middleware');
//     next();
// });

app.use(express.static('public'));
const userRouter=require('./Routers/userRouter')
const authRouter=express.Router();

app.use('/user',userRouter);
app.use('/auth',authRouter);
//mounting in express

authRouter
.route('/forgetPassword')
.get(getForgetPassword)
.post(postForgetPassword,validateEmail);



authRouter
.route('/signup')
.post(setCreator,signupUser);


function setCreator(req,res,next){
    req.body.createdAt=new Date().toISOString();
    next();
}


 async function signupUser(req,res){
    // let userDetails=req.body;
    // let name=userDetails.name;
    // let email=userDetails.email;
    // let password=userDetails.password;
try{
    
    let userObj=await userModel.create(req.body);
    console.log(userObj+"-----");


    res.json({
        message:'user signedUp',
        user:req.body
    
    })

}
catch(err){
    console.log(err);
    res.json({message:err.message})
}
}



https://classroom.pepcoding.com/index
//redirects





let user=[];
// client <- server
//crud- create read update delete
//read
// app.get('/',(req,res)=>{
//     res.send('Home Page');
// });

// app.get('/user',getUser);
