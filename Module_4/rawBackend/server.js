const express =require("express");
const fs=require("fs");

const content =JSON.parse(fs.readFileSync("./data.json"))
const app=express();
const user=[];


app.use(express.json());


app.use(express.static("public"));



const userRouter=express.Router();
const authRouter=express.Router();


app.use('/user',userRouter);
app.use('/auth',authRouter);

userRouter
     .route('/')

     .get(protectRoute,getUser)
     .post(bodyChecker,createUser);

authRouter
    .route("/signup")
    .post(bodyChecker,signUp);
authRouter
    .route("/login")
    .post(bodyChecker,loginUser);

function getUser(req,res){
    res.json({message:content})
}
function protectRoute(req,res,next){
    console.log("reached body checker");
    // console.log(req.body);
    let isAllowed=true;
    if(isAllowed){
        next();
    }else{
        res.send("kindly send details in body");
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
function signUp(req,res){
    let {name,email,password,cpassword}=req.body;
    console.log(2);
        if(password==cpassword){
        let newUser={name,email,password};
        // console.log(newUser);
            content.push(newUser);
            fs.writeFileSync("./data.json",JSON.stringify(content));
            console.log(3);
            res.status(201).json({createdUser:newUser})
        }else{
            res.status(400).json({message:"p&Cpincorrrect"});

        }
    
    }
function loginUser(req,res){
    let {email,password}=req.body;
    
    let obj=content.find((obj)=> {return obj.email==email})

    if(!obj){
        return res.status(422).json({message:"no user exist"});
    }

    if(obj.password==password){
        res.status(200).json({
            message:"User Logged In",
            user:obj
        })
    }else{
        res.status(400).json({message:"password incorrect"
        })
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

//404 Error
app.use(function(req,res){
    res.status(400).sendFile('public/404.html',{root:__dirname})
})





