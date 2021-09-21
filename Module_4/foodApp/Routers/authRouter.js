const express=require('express');
const authRouter=express.Router();


app.use('/auth',authRouter);

authRouter
.route('/forgetPassword')
.get(getForgetPassword)
.post(postForgetPassword,validateEmail);