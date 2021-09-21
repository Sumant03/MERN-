const express=require('express')
const userRouter=express.Router();


let user=[];
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


app.use('/user',userRouter);


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



// function getForgetPassword(req,res){
//     res.sendFile('./public/forgetPassword.html',{root:__dirname});
// }

// function postForgetPassword(req,res,next){
//     let data=req.body;
//     console.log('data',data);
//     //check if email id is correct- validate
//     next();
//     //check if user exists in db
//     // res.json({
//     //     message:"data received",
//     //     data:data.email
//     // })
// };

// function validateEmail(req,res){
//     console.log('in validateEmail function');
//     console.log(req.body);
//     //hw to check if email is correct or not -> @ , .
//     //indexOf
//      res.json({
//             message:"data received",
//             data:req.body
//         });
// }


app.get('/user-all',(req,res)=>{
    res.redirect('/user');
});

//404 page
app.use((req,res)=>{
    res.sendFile('public/404.html',{root:__dirname})
});

module.exports 