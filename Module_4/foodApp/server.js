const express=require('express');

//server creation
const app=express();


let port='5000';
app.listen(port,function(){
    console.log('hi there server started');
});

app.use(express.json());
app.use(express.static('public'))

// const userRouter=express.Router();
const authRouter=express.Router();
// app.use('/user',userRouter);
app.use('/auth',authRouter);



// userRouter
// .route('/')
// .get(getUser)
// .post(createUser)
// .patch(updateUser)
// .delete(deleteUser)

// userRouter
// .route('/:id')
// .get(getUserById);


authRouter
.route('/signup')
.post(signupUser)

//types of request -> get post put delete

function signupUser(req,res){

    let {email,name,password}=req.body;
    user.push({email,name,password});
    console.log('user',req.body);
    res.json({
        message:'user signup',
        user:req.body
    })}


// app.get('/',(req,res)=>{
//     console.log(req);
//     console.log(req.hostname);
//     console.log(req.path);
//     console.log(req.method);
// res.send('<h1>server 5000</h1>');

// })
// let obj={}

// // app.get('/user',(req,res)=>{
    
// // res.send(obj);
// //   console.log(req.body);
// // })

// function getUser(req,res){
//     res.json(user);
// }
// let user={};
// // app.post('/user',(req,res)=>{
// //     user=req.body;
// //     console.log(req.body);
// //     res.send('data has been added')
// // })

// function createUser(req,res){
//     user=req.body;
//     // console.log(req.body);
//     res.send('data has been added succesfully');
// }

// // app.patch('/user',(req,res)=>{
// //     let obj=req.body;
// //     for(let key in obj){
// //         user[key]=obj[key];

// //     }
// //     console.log(req.body);
// //     console.log(user);
// //     res.json(user)
// // })

// function updateUser (req,res){
//     let obj=req.body;
//     for(let key in obj){
//         user[key]=obj[key];
//     }
//     res.json(user);
// };

// function deleteUser(req,res){
//     user={};
//     res.json(user);
//     // res.send('ussr has been deleted');
// }

// function getUserById(req,res){
//     console.log(req.params);
//     res.json(req.params.id);
// }

// app.delete('/user',(req,res)=>{
//     user={};
//     res.json(user)
// })

// app.get('/user/:id',(req,res)=>{
//     console.log(req.params);
//     res.json(req.params.id)
// })