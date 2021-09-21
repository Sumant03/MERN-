const userSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },

    name:{
     type:String,
     required:true
    },
    rating:{
      type:Number,
      required:true,
  }, 
   price:{
      type:Number,
      required:true,
     
  },
  delivery:{
      type:Boolean,
      required:true,
  }
  ,meals:{
      tyep:Number,
      required:true
  }
  ,description:{
      type:String,
      required:true
  }
  })
  