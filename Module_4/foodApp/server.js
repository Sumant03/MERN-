const express=require('express');
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
const userRouter=express.Router();
const authRouter=express.Router();

app.use('/user',userRouter);
app.use('/auth',authRouter);
//mounting in express


userRouter
.route('/')
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);

// app.use((req,res,next)=>{
//     //do some work
//     console.log('i am a middleware 2nd time');
//     next();
// });

userRouter
.route('/:id')
.get(getUserById);
	// @@ -29,7 +43,40 @@ 
    authRouter
.route('/signup')
.post(signupUser);

authRouter
.route('/forgetPassword')
.get(getForgetPassword)
.post(postForgetPassword,validateEmail);

function getForgetPassword(req,res){
    res.sendFile('./public/forgetPassword.html',{root:__dirname});
}

function postForgetPassword(req,res,next){
    let data=req.body;
    console.log('data',data);
    //check if email id is correct- validate
    next();
    //check if user exists in db
    // res.json({
    //     message:"data received",
    //     data:data.email
    // })
};

function validateEmail(req,res){
    console.log('in validateEmail function');
    console.log(req.body);
    //hw to check if email is correct or not -> @ , .
    //indexOf
     res.json({
            message:"data received",
            data:req.body
        });
}


https://classroom.pepcoding.com/index
//redirects
app.get('/user-all',(req,res)=>{
    res.redirect('/user');
	// @@ -62,13 +109,14 @@ 
    let user=[];
// client <- server
//crud- create read update delete
//read
// app.get('/',(req,res)=>{
//     res.send('Home Page');
// });

// app.get('/user',getUser);

function getUser(req,res){
    console.log('getUser called');
    res.json(user);
}

//post request
// client-> server 
//create
// app.post('/user',createUser);
function createUser(req,res){
    user=req.body;
    // console.log(req.body);
    res.send('data has been added succesfully');
}
//update
// app.patch('/user',updateUser);
function updateUser (req,res){
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];
    }
    res.json(user);
};
//delete 
// app.delete('/user',deleteUser);
function deleteUser(req,res){
    user={};
    res.json(user);
    // res.send('ussr has been deleted');
}
//param route
// app.get('/user/:id',getUserById);
function getUserById(req,res){
    console.log(req.params);
    res.json(req.params.id);
}