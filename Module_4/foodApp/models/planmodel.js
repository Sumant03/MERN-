const userSchema= new mongoose.Schema({
    id:{
        type:Number,
      
    },
    name:{
     type:String,
     required:true
    },
    rating:{
      type:Number,
 
  }, 
   price:{
      type:Number,
 
     
  },
  delivery:{
      type:Boolean,

  }
  ,meals:{
      tyep:Number,
   
  }
  ,description:{
      type:String,
  
  }
  })
  