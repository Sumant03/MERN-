const mongoose=require("mongoose");
const db=require('../secrets');
const validator=require('email-validator');


mongoose.connect(db.link).then(function(){
console.log('db connected');
})
.catch(function(err){
console.log(err);
})

const userSchema= new mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  email:{
      type:String,
      required:true,
      unique:true,
      validate:function(){
       return validator.validate(this.email);
      }
  },
  createdAt:{
      type:Date
  }
  ,  password:{
    type:String,
    required:true,

    
    min:8

},  confirmpassword:{
    type:String,
    required:true,
    min:8,
    validate:function(){
        return this.password=this.confirmpassword
    }
}
})

userSchema.pre('save',function(){
    this.confirmpassword=undefined;
})

const userModel=mongoose.model('userModel',userSchema);



// (async function createUser(){
//     let user={
//         name:'Sumo',
//         age:20,
//         email:'abc@gmail.com',
//         password:'12345',
//         confirmpassword:'12345'
//     };
//     let userObj=await userModel.create(user);
//     console.log(userObj);
// })();


module.exports=userModel;